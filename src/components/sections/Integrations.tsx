import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";

const integrations = [
  {
    name: "Google Analytics",
    icon: "/brand-icons/google-analytics.svg",
    role: "GA4 events, sessions and funnel data",
  },
  {
    name: "Google Ads",
    icon: "/brand-icons/google-ads.svg",
    role: "Paid spend and performance in one report",
  },
  {
    name: "Meta Ads",
    icon: "/brand-icons/meta-ads.svg",
    role: "Campaigns plus the Meta ad library",
  },
  {
    name: "LinkedIn",
    icon: "/brand-icons/linkedin.svg",
    role: "Conversations, ad activity and outreach",
  },
  {
    name: "Instagram",
    icon: "/brand-icons/instagram.svg",
    role: "Creator and profile tracking",
  },
  {
    name: "N8N",
    icon: "/brand-icons/n8n.svg",
    role: "Automations triggered from tasks",
  },
];

export function Integrations() {
  return (
    <section className="py-24 md:py-32" id="integrations">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="text-label flex items-center gap-2.5 text-ink-soft">
            <span className="dot-marker" aria-hidden />
            Integrations
          </p>
          <h2 className="text-h1 mt-6 text-balance">
            Plugs into the channels you already run.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Connect analytics, paid and social once. Every module reads the
            same live data, and what you learn flows back into the next
            campaign.
          </p>
        </Reveal>
        <RevealStagger className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3" gap={0.06}>
          {integrations.map((t) => (
            <RevealItem key={t.name}>
              <article className="flex h-full items-start gap-4 rounded-lg bg-white p-5 ring-1 ring-cream-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.icon}
                  alt={`${t.name} logo`}
                  width={36}
                  height={36}
                  loading="lazy"
                  className="size-9 shrink-0"
                />
                <div>
                  <h3 className="text-sm font-semibold">{t.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft max-sm:hidden">
                    {t.role}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
        <Reveal delay={0.1}>
          <p className="mt-8 text-sm leading-relaxed text-ink-soft">
            Plus a research layer across Google News, Perplexity and Gemini,
            and your choice of OpenAI, Gemini or Claude for every AI job.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
