import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import {
  organizationJsonLd,
  websiteJsonLd,
  softwareJsonLd,
  faqJsonLd,
  videosJsonLd,
  SITE_URL,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Checkgrow · The go-to-market engine that learns your business",
  description:
    "Growth shouldn't depend on who's in the room. Checkgrow is the growth operating system that keeps everything your company knows working for every team. Join the waitlist.",
  applicationName: "Checkgrow",
  category: "Marketing software",
  keywords: [
    "AI growth marketing platform",
    "go-to-market engine",
    "marketing knowledge base",
    "AI marketing agents",
    "CMO dashboard",
    "enterprise marketing team software",
    "campaign strategy AI",
    "competitor tracking",
    "GA4 insights",
    "marketing attribution software",
    "CAC tracking without spreadsheets",
    "launch Meta and Google campaigns from one brief",
    "AI that knows your brand and ICP",
    "board-ready marketing dashboard",
    "marketing without an agency",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/brand/logos/favicon-inverse.svg",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Checkgrow · The go-to-market engine that learns your business",
    description:
      "Everything your company knows, in one system: learning, improving, and working for every team. Turning knowledge into customers and recognition.",
    url: SITE_URL,
    siteName: "Checkgrow",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Checkgrow: the go-to-market engine that learns your business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Checkgrow · AI Native Growth Marketing",
    description:
      "One system where knowledge, research, execution and measurement connect and compound.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videosJsonLd) }}
        />
      </body>
    </html>
  );
}
