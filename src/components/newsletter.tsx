"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => null);
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
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
        <form onSubmit={handleSubmit} className="mt-6 flex gap-3 max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="flex-1 rounded-full border border-[var(--border)] px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80 disabled:opacity-50"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">{errorMsg}</p>
        )}
      </div>
    </section>
  );
}
