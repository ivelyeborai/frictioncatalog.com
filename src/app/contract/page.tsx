import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Parent-Child Technology Contract",
  description:
    "Create a mutual family agreement about device boundaries, screen time limits, and intentional technology use.",
  openGraph: {
    title: "Parent-Child Technology Contract — Friction Catalog",
    description:
      "Create a mutual family agreement about device boundaries, screen time limits, and intentional technology use.",
  },
};

export default function Contract() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Parent-Child Technology Contract
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--muted)] leading-relaxed">
          A mutual agreement about device boundaries, screen time limits, and
          what happens when someone breaks the rules. Parents follow identical
          rules.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-[var(--border)] p-8">
            <h2 className="text-xl font-bold">Interactive Builder</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Interactive form · Digital signatures · Print-ready
            </p>
            <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
              Walk through a 9-step wizard to create a custom contract for your
              family. Takes about 10 minutes.
            </p>
            <Link
              href="/contract/create"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80"
            >
              Start Creating →
            </Link>
          </div>

          <div className="rounded-lg border border-[var(--border)] p-8">
            <h2 className="text-xl font-bold">Blank Template</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Print at home · Fill out by hand
            </p>
            <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
              Download a blank PDF template to print and fill out together as a
              family with pen and paper.
            </p>
            <a
              href="/blank-contract.pdf"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold transition-colors hover:bg-neutral-50"
            >
              Download PDF
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
