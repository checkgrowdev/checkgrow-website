import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";

/* Waitlist intake. The real destination is the Checkgrow webhook (leads
   land in the platform); the local .data/waitlist.jsonl append is a
   best-effort audit log with the delivery status, useful in dev and as a
   recovery trail. If the webhook refuses the lead we return 502 so the
   form shows its retry message instead of silently dropping a signup. */

const WEBHOOK_URL =
  process.env.WAITLIST_WEBHOOK_URL ??
  "https://api.checkgrow.com/functions/v1/user-waitlist-webhook/uwh_7b0c87adcbccd657095974978a7a5c0c018982bbc52b70f8";

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
  const clean = (v: unknown) =>
    typeof v === "string" ? v.trim().slice(0, 80) : "";

  const lead = {
    first_name: clean(firstName),
    last_name: clean(lastName),
    work_email: email,
  };

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
