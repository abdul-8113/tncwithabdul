import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// ─── Fonts ────────────────────────────────────────────────────────────────────

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// ─── Site constants ───────────────────────────────────────────────────────────

const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL ?? "https://abdullahi.dev";
const FULL_NAME = "Abdullahi N. Buhmean";
const HANDLE    = "@abdullahi_dev";         // update with real Twitter/X handle
const OG_IMAGE  = `${SITE_URL}/og-image.png`; // place a 1200×630 image in /public

// ─── Viewport ────────────────────────────────────────────────────────────────

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080808",
  colorScheme: "dark",
};

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core ──
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${FULL_NAME} – Software Engineer & Founder`,
    template: `%s | ${FULL_NAME}`,
  },
  description:
    "Engineering Intelligent Systems for Scale. Software Engineer, Systems Architect, AI Builder, and Founder building scalable digital infrastructure for emerging markets and global innovation.",
  applicationName: "Abdullahi N. Buhmean Portfolio",
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,

  // ── Keywords ──
  keywords: [
    "Abdullahi Buhmean",
    "Abdullahi N. Buhmean",
    "Software Engineer",
    "Systems Architect",
    "AI Builder",
    "Founder",
    "CTO",
    "Technical Co-Founder",
    "Backend Engineer",
    "Full Stack Developer",
    "App Developer",
    "React Native",
    "Next.js Developer",
    "FastAPI",
    "Node.js",
    "Cloud Infrastructure",
    "AI Automation",
    "LLM Integration",
    "Scalable Systems",
    "Emerging Markets Tech",
    "Digital Infrastructure",
    "PostgreSQL",
    "TypeScript",
    "Serverless",
    "Microservices",
  ],

  // ── Canonical ──
  alternates: {
    canonical: SITE_URL,
  },

  // ── Open Graph ──
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE_URL,
    siteName: FULL_NAME,
    title: `${FULL_NAME} – Software Engineer & Founder`,
    description:
      "Engineering Intelligent Systems for Scale. A controlled digital experience that reflects a founder who engineers scalable systems for emerging markets and global innovation.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} – Software Engineer & Founder`,
        type: "image/png",
      },
    ],
    firstName: "Abdullahi",
    lastName: "Buhmean",
    username: "abdullahi_dev",
  },

  // ── Twitter / X ──
  twitter: {
    card: "summary_large_image",
    site: HANDLE,
    creator: HANDLE,
    title: `${FULL_NAME} – Software Engineer & Founder`,
    description:
      "Engineering Intelligent Systems for Scale. Software Engineer · Systems Architect · AI Builder · Founder.",
    images: [
      {
        url: OG_IMAGE,
        alt: `${FULL_NAME} – Software Engineer & Founder`,
      },
    ],
  },

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Icons ──
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg",    type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  // ── Manifest ──
  manifest: "/manifest.json",

  // ── Verification (add real values when verifying) ──
  verification: {
    google: "",      // e.g. "abcdef123456"
    // yandex: "",
    // bing: "",
  },

  // ── Category ──
  category: "technology",
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: FULL_NAME,
  url: SITE_URL,
  jobTitle: "Software Engineer & Founder",
  description:
    "Software Engineer, Systems Architect, AI Builder, and Founder building scalable digital infrastructure for emerging markets.",
  knowsAbout: [
    "Software Engineering",
    "Systems Architecture",
    "AI Automation",
    "Backend Engineering",
    "Cloud Infrastructure",
    "Mobile App Development",
    "React Native",
    "Next.js",
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "TypeScript",
  ],
  sameAs: [
    "https://github.com/abdullahi-dev",      // update with real URLs
    "https://linkedin.com/in/abdullahi-dev",
    "https://twitter.com/abdullahi_dev",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${FULL_NAME} – Portfolio`,
  url: SITE_URL,
  description:
    "Engineering Intelligent Systems for Scale. Interactive portfolio of Abdullahi N. Buhmean.",
  author: {
    "@type": "Person",
    name: FULL_NAME,
  },
};

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
