import type { Metadata } from "next";
import { Work_Sans, Courier_Prime } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ServiceWorkerRegister } from "./sw-register";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Friction Catalog — Technology That Makes You Think",
    template: "%s — Friction Catalog",
  },
  description:
    "Every tool here introduces intentional friction — space between stimulus and response. Not punishment. Not deprivation. Space for choice.",
  metadataBase: new URL("https://frictioncatalog.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Friction Catalog",
    title: "Friction Catalog — Technology That Makes You Think",
    description:
      "Every tool here introduces intentional friction — space between stimulus and response.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Friction Catalog — Technology That Makes You Think",
    description:
      "Every tool here introduces intentional friction — space between stimulus and response.",
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Friction Catalog",
    url: "https://frictioncatalog.com",
    description:
      "Technology that creates space between stimulus and response. Curated tools for intentional living.",
  };

  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${courierPrime.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
        <Analytics />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
