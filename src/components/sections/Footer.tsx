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
          <p>© {new Date().getFullYear()} Checkgrow. All rights reserved.</p>
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
      </div>
    </footer>
  );
}
