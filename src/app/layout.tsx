import type { Metadata } from "next";
import { Work_Sans, Courier_Prime } from "next/font/google";
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
  title: "Friction Catalog — Technology That Makes You Think",
  description:
    "Every tool here introduces intentional friction — space between stimulus and response. Not punishment. Not deprivation. Space for choice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${courierPrime.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
