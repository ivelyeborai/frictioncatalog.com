"use client";

import Link from "next/link";
import { useState } from "react";
import { products, categories } from "@/data/products";

export default function Shop() {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active ? products.filter((p) => p.category === active) : products;

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[var(--border)]">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-extrabold tracking-tight">
            FRICTION CATALOG
          </Link>
          <div className="flex gap-6 text-sm font-semibold text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-[var(--foreground)]">
              Shop
            </Link>
            <Link href="/contract" className="hover:text-[var(--foreground)] transition-colors">
              Contract
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Intentional Tools
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)] leading-relaxed">
          Every product here introduces friction between impulse and action.
          Not punishment — space for choice.
        </p>

        {/* Category filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActive(null)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              active === null
                ? "bg-[var(--accent)] text-white"
                : "bg-neutral-100 text-[var(--muted)] hover:bg-neutral-200"
            }`}
          >
            All ({products.length})
          </button>
          {categories.map((cat) => {
            const count = products.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat === active ? null : cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                  active === cat
                    ? "bg-[var(--accent)] text-white"
                    : "bg-neutral-100 text-[var(--muted)] hover:bg-neutral-200"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Product grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <div
              key={product.slug}
              className="flex flex-col justify-between rounded-lg border border-[var(--border)] p-6 transition-shadow hover:shadow-md"
            >
              <Link href={`/shop/${product.slug}`} className="block">
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{product.emoji}</span>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-semibold text-[var(--muted)]">
                    {product.category}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  {product.tagline}
                </p>
              </Link>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-mono text-lg font-bold">
                  {product.price}
                </span>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-80"
                >
                  Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <p className="mt-4 text-xs text-[var(--muted)]">
            As an Amazon Associate, Friction Catalog earns from qualifying
            purchases.
          </p>
          <p className="mt-4 text-xs text-[var(--muted)]">
            &copy; 2026 Friction Catalog &middot; For The People, Always
          </p>
        </div>
      </footer>
    </div>
  );
}
