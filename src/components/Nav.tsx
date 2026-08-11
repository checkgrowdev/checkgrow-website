"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#platform", label: "Platform" },
  { href: "#solution", label: "Solution" },
  { href: "#stories", label: "Real stories" },
  { href: "#use-cases", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* scrolled: the bar compresses into a floating glassy pill; back at the
     top it relaxes into the plain full-width header. The mobile dropdown
     keeps the relaxed form so its panel can attach cleanly. */
  const pill = scrolled && !open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] ${
          pill
            ? "mt-3 w-[calc(100%-24px)] max-w-4xl rounded-full bg-white/60 shadow-soft ring-1 ring-white/50 backdrop-blur-xl backdrop-saturate-150"
            : "mt-0 w-full max-w-full rounded-none bg-transparent ring-0" +
              (open ? " bg-cream" : "")
        }`}
      >
        <nav
          className={`flex items-center justify-between gap-6 transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] ${
            pill ? "h-13 px-5 sm:px-6" : "wrap h-16"
          }`}
        >
        <Link
          href="/"
          aria-label="Checkgrow home"
          className="shrink-0"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image
            src="/brand/logos/wordmark-dark.svg"
            alt="Checkgrow"
            width={152}
            height={27}
            priority
            className={`w-auto transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] ${
              pill ? "h-5.5" : "h-6.5"
            }`}
          />
        </Link>
        <div
          className={`hidden items-center transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] md:flex ${
            pill ? "gap-6" : "gap-8"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            className={`hidden items-center rounded-full bg-ink text-sm font-medium text-cream transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] hover:bg-ink-soft sm:inline-flex ${
              pill ? "min-h-9 px-5" : "min-h-11 px-6"
            }`}
          >
            Join the waitlist
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex size-11 items-center justify-center rounded-md md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform duration-200 ${open ? "top-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 bg-ink transition-transform duration-200 ${open ? "bottom-1 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
        </nav>
      </div>
      {open && (
        <div className="border-t border-cream-3 bg-cream px-6 pb-6 pt-4 md:hidden">
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="mb-4 flex min-h-12 items-center justify-center rounded-full bg-ink text-sm font-medium text-cream"
          >
            Join the waitlist
          </a>
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-cream-3 text-base text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
