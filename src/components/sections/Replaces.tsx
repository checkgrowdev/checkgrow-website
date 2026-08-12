"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const rows = [
  {
    cat: "Brand & knowledge",
    tools: "Notion or Frontify",
    toolNote: "Guidelines live in a doc nobody opens",
    price: "€49/mo",
    cg: "Knowledge Center + Brand Basics",
    cgNote: "Read automatically by every AI output",
  },
  {
    cat: "AI content",
    tools: "Jasper or Copy.ai",
    toolNote: "Re-briefed on your business every prompt",
    price: "€99/mo",
    cg: "AI Agents (40+) + AI Assistant",
    cgNote: "Already knows your product, tone and audience",
  },
  {
    cat: "Campaign ops",
    tools: "CoSchedule or Monday",
    toolNote: "Briefs sit apart from the work itself",
    price: "€79/mo",
    cg: "Campaigns + Creatives",
    cgNote: "Brief, creative and tracking in one record",
  },
  {
    cat: "Social",
    tools: "Hootsuite or Sprout Social",
    toolNote: "Surfaces volume, not the right conversations",
    price: "€149/mo",
    cg: "Social Media + Content Monitoring",
    cgNote: "Matched against your buyer personas",
  },
  {
    cat: "Competitive intel",
    tools: "Semrush or Similarweb",
    toolNote: "Another login, another quarterly report",
    price: "€199/mo",
    cg: "Competitors",
    cgNote: "Live ad activity plus AI gap analysis",
  },
  {
    cat: "Prospecting",
    tools: "Apollo.io or ZoomInfo",
    toolNote: "Exports to a sheet that goes stale",
    price: "€199/mo",
    cg: "Companies",
    cgNote: "Fit score, buying signals, decision-makers",
  },
  {
    cat: "Conversion",
    tools: "Hotjar, VWO or a CRO agency",
    toolNote: "A PDF of findings once a quarter",
    price: "€129/mo",
    cg: "Website audit",
    cgNote: "Scored, with a ranked fix per finding",
  },
  {
    cat: "Analytics",
    tools: "Databox or Mixpanel",
    toolNote: "Dashboards you still have to interpret",
    price: "€99/mo",
    cg: "Insights + Smart Reporting",
    cgNote: "Plain-language findings, biggest drop-off flagged",
  },
  {
    cat: "Tracking",
    tools: "Cookiebot or OneTrust",
    toolNote: "Only checked after the data breaks",
    price: "€99/mo",
    cg: "Server-Side",
    cgNote: "Consent flow, tags and cookies checked live",
  },
  {
    cat: "Work tracking",
    tools: "Asana or ClickUp",
    toolNote: "Where good ideas go to be forgotten",
    price: "€59/mo",
    cg: "Tasks + Objectives",
    cgNote: "Tasks generated straight from findings and chats",
  },
  {
    cat: "Creative direction",
    tools: "Canva or Figma",
    toolNote: "Off-brand the moment a designer isn't looking",
    price: "€39/mo",
    cg: "Design System + Moodboard",
    cgNote: "On-brand mockups from your stored brand rules",
  },
];

export function Replaces() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? rows : rows.slice(0, 4);

  return (
    <section className="border-t border-cream-3 bg-cream-2 py-24 md:py-32" id="pricing">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="text-label flex items-center gap-2.5 text-ink-soft">
            <span className="dot-marker" aria-hidden />
            What it replaces
          </p>
          <h2 className="text-h1 mt-6 text-balance">
            Eleven subscriptions, side by side with one.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            The tools most growth teams already pay for, and the Checkgrow
            feature that covers each one. Six tools. One tab. Zero chaos.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          {/* Table */}
          <div className="relative mt-14">
            <div className="overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-cream-3">
              {/* header */}
              <div className="hidden border-b border-cream-3 md:grid md:grid-cols-[170px_1fr_1fr]">
                <p className="text-label px-6 py-4 text-ink-soft">Function</p>
                <div className="px-6 py-4">
                  <p className="text-sm font-semibold text-ink-soft">Typical stack</p>
                  <p className="text-label mt-0.5 normal-case tracking-normal text-ink-soft/70">
                    11 tools · 11 logins
                  </p>
                </div>
                <div className="bg-ink px-6 py-4">
                  <p className="text-sm font-semibold text-cream">Checkgrow</p>
                  <p className="text-label mt-0.5 normal-case tracking-normal text-tint/80">
                    1 platform · 1 context
                  </p>
                </div>
              </div>

              <div className="relative">
                {visible.map((r) => (
                  <div
                    key={r.cat}
                    className="grid border-b border-cream-3 last:border-b-0 md:grid-cols-[170px_1fr_1fr]"
                  >
                    <p className="text-label flex items-center bg-cream-2 px-6 pb-2 pt-4 text-ink-soft md:bg-transparent md:py-4">
                      {r.cat}
                    </p>
                    <div className="px-6 py-2 md:py-4">
                      <p className="text-sm font-semibold">{r.tools}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">
                        {r.toolNote}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-ink-soft">{r.price}</p>
                    </div>
                    <div className="px-6 pb-4 pt-2 md:bg-tint/30 md:py-4">
                      <p className="text-sm font-semibold">{r.cg}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">
                        {r.cgNote}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-[#1E7A4F]">included</p>
                    </div>
                  </div>
                ))}

                {/* Collapsed: blur fade over the tail of the table */}
                {!expanded && (
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent backdrop-blur-[2px]" />
                )}
              </div>
            </div>

            {/* Expand / collapse */}
            <div className="-mt-5 flex justify-center">
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                className="relative z-10 inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-cream transition-colors duration-200 hover:bg-ink-soft"
              >
                {expanded ? "Collapse" : "Expand the full comparison"}
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  aria-hidden
                  className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                >
                  <path
                    d="M1 1.5 L5 5.5 L9 1.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Totals */}
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl bg-white p-7 shadow-soft ring-1 ring-cream-3">
              <p className="text-label flex items-center gap-2.5 text-ink-soft">
                Full stack
                <span className="rounded-full bg-cream-3 px-2.5 py-0.5 text-[10px] font-semibold normal-case tracking-normal text-ink-soft/80">
                  Before
                </span>
              </p>
              <p className="text-h2 mt-3 line-through decoration-ink-soft/50 decoration-2">€1,199/mo</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                before seats, overages and the hours spent stitching it
                together
              </p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {[
                  "The business re-explained 11 times",
                  "No shared memory of what worked",
                  "Reporting assembled by hand",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden className="mt-1 shrink-0">
                      <path d="M2 2 L10 10 M10 2 L2 10" stroke="#9B9B9B" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl p-7 text-white shadow-raised" style={{ backgroundColor: "#6373FF" }}>
              <p className="text-label flex items-center gap-2.5 text-white/85">
                Checkgrow
                <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold normal-case tracking-normal text-white">
                  Now
                </span>
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <p className="text-h2">€79/month</p>
                <span className="rounded-full bg-white/25 px-3.5 py-1.5 text-xs font-semibold text-white">
                  Start for free
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                one platform, one source of truth, one bill
              </p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {[
                  "Set the business up once",
                  "Every result feeds the next campaign",
                  "Reporting already connected",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-2.5 text-sm text-white/90">
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden className="mt-1 shrink-0">
                      <path d="M1.5 6.5 L4.5 9.5 L10.5 2.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.85" />
                    </svg>
                    {li}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className="mt-7 inline-flex min-h-12 items-center rounded-full bg-white px-8 text-sm font-semibold text-[#6373FF] transition-colors duration-200 hover:bg-cream"
              >
                Join the waitlist
              </a>
            </div>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-ink-soft">
            Third-party tools named as category examples; prices are typical
            list prices for comparable plans.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
