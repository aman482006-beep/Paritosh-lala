import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#FBFBFA",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Introvert To Icon | Communication & Public Speaking Course by Paritosh Anand",
  description:
    "Learn communication, storytelling, public speaking, confidence, body language and voice modulation with Paritosh Anand through Introvert To Icon.",
  keywords: [
    "Paritosh Anand",
    "Introvert To Icon",
    "communication course",
    "public speaking",
    "storytelling course",
    "voice modulation",
    "confidence building",
    "body language",
  ],
  authors: [{ name: "Paritosh Anand", url: "https://learn.paritoshanand.com" }],
  creator: "Paritosh Anand",
  metadataBase: new URL("https://learn.paritoshanand.com"),
  openGraph: {
    title: "Introvert To Icon | Communication & Public Speaking Course by Paritosh Anand",
    description:
      "A practical communication and public-speaking course by Paritosh Anand designed to help you communicate more clearly, tell better stories, and express who you are.",
    url: "https://learn.paritoshanand.com",
    siteName: "Introvert To Icon",
    images: [
      {
        url: "/images/introvert-to-icon-cover.webp",
        width: 1200,
        height: 1200,
        alt: "Introvert To Icon Course by Paritosh Anand",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Introvert To Icon | Communication & Public Speaking Course by Paritosh Anand",
    description:
      "Learn communication, storytelling, public speaking, and confidence with Paritosh Anand.",
    images: ["/images/introvert-to-icon-cover.webp"],
    creator: "@iamparitoshanand",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Course & Person & FAQ
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://learn.paritoshanand.com/#instructor",
        "name": "Paritosh Anand",
        "jobTitle": "Storyteller, Speaker & Founder",
        "sameAs": [
          "https://www.instagram.com/iamparitoshanand/",
          "https://www.youtube.com/@iamparitoshanand",
          "https://www.linkedin.com/in/iamparitoshanand/"
        ]
      },
      {
        "@type": "Course",
        "@id": "https://learn.paritoshanand.com/#course",
        "name": "Introvert To Icon",
        "description": "A practical communication and public-speaking course designed to help quiet thinkers speak with confidence and express who they are.",
        "provider": {
          "@type": "Person",
          "name": "Paritosh Anand"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://learn.paritoshanand.com/web/checkout/68c11d92d8833032c99e2298",
          "availability": "https://schema.org/OnlineOnly"
        }
      }
    ]
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#FBFBFA] text-charcoal-900 selection:bg-gold-200">
        <ScrollProgress />
        <Navbar />
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
