import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[var(--border)]">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-extrabold tracking-tight">
            FRICTION CATALOG
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-6xl font-extrabold tracking-tight">404</p>
        <h1 className="mt-4 text-2xl font-bold">
          This page has too much friction.
        </h1>
        <p className="mt-3 text-[var(--muted)]">
          It doesn&apos;t exist. But these do:
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold transition-colors hover:bg-neutral-100"
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold transition-colors hover:bg-neutral-100"
          >
            Blog
          </Link>
        </div>
      </main>

      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <p className="text-xs text-[var(--muted)]">
            &copy; 2026 Friction Catalog &middot; For The People, Always
          </p>
        </div>
      </footer>
    </div>
  );
}
