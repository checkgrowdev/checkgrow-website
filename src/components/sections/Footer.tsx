import Image from "next/image";

export function Footer() {
  return (
    <footer className="-mt-px bg-ink pb-10 pt-4 text-cream">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 border-t border-ink-soft pt-10 md:flex-row md:items-center">
          <div>
            <Image
              src="/brand/logos/wordmark-light.svg"
              alt="Checkgrow"
              width={152}
              height={27}
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-tint/80">
              AI Native Growth Marketing. One system where knowledge,
              research, execution and measurement connect and compound.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-tint/90">
            <a href="#platform" className="transition-colors duration-200 hover:text-cream">
              Platform
            </a>
            <a href="#solution" className="transition-colors duration-200 hover:text-cream">
              Solution
            </a>
            <a href="#stories" className="transition-colors duration-200 hover:text-cream">
              Real stories
            </a>
            <a href="#use-cases" className="transition-colors duration-200 hover:text-cream">
              Features
            </a>
            <a href="#pricing" className="transition-colors duration-200 hover:text-cream">
              Pricing
            </a>
            <a href="#faq" className="transition-colors duration-200 hover:text-cream">
              FAQ
            </a>
            <a
              href="mailto:bruno@checkgrow.com"
              className="transition-colors duration-200 hover:text-cream"
            >
              Contact
            </a>
            <a
              href="https://doc.checkgrow.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-cream"
            >
              Documentation
            </a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-3 text-xs text-tint/60 sm:flex-row sm:items-center">
          <p>© Copyright Checkgrow · checkgrow.com</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="https://ai.checkgrow.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-cream"
            >
              Privacy Policy
            </a>
            <a
              href="https://ai.checkgrow.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-cream"
            >
              Terms of Service
            </a>
          </div>
        </div>
        <p className="mt-8 text-[8px] leading-relaxed text-tint/45">
          Checkgrow d.o.o., registered in Zagreb, Croatia, VAT ID:
          HR16006061302, operates in accordance with applicable Croatian and
          European Union regulations. We do not collect, process, or store any
          personal or business data without explicit user consent or a lawful
          basis as defined under the General Data Protection Regulation
          (GDPR). All integrations and authentications are handled securely
          through authorised providers, and we do not store passwords or
          access third-party accounts without proper permission. All rights,
          obligations, data usage terms, payment conditions, and compliance
          details are fully outlined in our Terms and Conditions and Privacy
          Policy. By using the Checkgrow platform, you acknowledge and agree
          to these policies.
        </p>
      </div>
    </footer>
  );
}
