"use client";

import { useRef, useState } from "react";

const BUTTONDOWN_URL =
  "https://buttondown.com/api/emails/embed-subscribe/friction-catalog";

export function Newsletter() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="border-t border-[var(--border)] bg-neutral-50">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-lg font-semibold">Thanks for subscribing.</p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Check your inbox to confirm your subscription. We&apos;ll send you
            essays on intentional friction. No spam, ever.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-[var(--border)] bg-neutral-50">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-extrabold tracking-tight">
          The Friction Report
        </h2>
        <p className="mt-3 max-w-xl text-[var(--muted)] leading-relaxed">
          Occasional essays on intentional friction, analog tools, and
          protecting your attention. No spam. Unsubscribe anytime.
        </p>
        <form
          ref={formRef}
          action={BUTTONDOWN_URL}
          method="post"
          target="_blank"
          onSubmit={handleSubmit}
          className="mt-6 flex gap-3 max-w-md"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="flex-1 rounded-full border border-[var(--border)] px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
          <button
            type="submit"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
