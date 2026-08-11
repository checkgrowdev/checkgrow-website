import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";
import { isCompanyEmail } from "@/lib/freeEmailDomains";

/* Waitlist intake. Leads forward server-side to the Checkgrow webhook;
   the URL (which embeds its token) lives ONLY in the WAITLIST_WEBHOOK_URL
   environment variable, never in the repo or the client bundle. The
   local .data/waitlist.jsonl append is a best-effort audit log with the
   delivery status. Failures return 502 so the form shows its retry
   message instead of silently dropping a signup. */

const WEBHOOK_URL = process.env.WAITLIST_WEBHOOK_URL;

/* Small in-memory rate limit so the public form can't be scripted into
   flooding the webhook. Single-container deploy, so a Map is enough. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 10;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const past = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (past.length >= MAX_PER_WINDOW) {
    hits.set(ip, past);
    return true;
  }
  past.push(now);
  hits.set(ip, past);
  if (hits.size > 10_000) hits.clear(); // crude memory cap
  return false;
}

async function auditLog(entry: Record<string, unknown>) {
  try {
    const dir = path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "waitlist.jsonl"),
      JSON.stringify(entry) + "\n",
    );
  } catch {
    // read-only filesystem in some deploys; the webhook is the source of truth
  }
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let email: unknown, firstName: unknown, lastName: unknown;
  try {
    ({ email, firstName, lastName } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 254
  ) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (!isCompanyEmail(email)) {
    return NextResponse.json(
      { error: "Please add your company email" },
      { status: 400 },
    );
  }
  const clean = (v: unknown) =>
    typeof v === "string" ? v.trim().slice(0, 80) : "";

  const lead = {
    first_name: clean(firstName),
    last_name: clean(lastName),
    work_email: email,
  };

  if (!WEBHOOK_URL) {
    // configuration error: fail loudly, never pretend the lead was taken
    console.error("WAITLIST_WEBHOOK_URL is not set");
    await auditLog({ ...lead, delivered: false, deliveryError: "no webhook configured", at: new Date().toISOString() });
    return NextResponse.json(
      { error: "Signup is temporarily unavailable" },
      { status: 503 },
    );
  }

  let delivered = false;
  let deliveryError = "";
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8000),
    });
    delivered = res.ok;
    if (!res.ok) deliveryError = `webhook ${res.status}`;
  } catch (e) {
    deliveryError = e instanceof Error ? e.message : "webhook unreachable";
  }

  await auditLog({
    ...lead,
    delivered,
    ...(deliveryError ? { deliveryError } : {}),
    at: new Date().toISOString(),
  });

  if (!delivered) {
    return NextResponse.json(
      { error: "Could not register the signup" },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}
