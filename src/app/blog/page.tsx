import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Essays on intentional friction, digital detox, analog tools, and building a more present life with technology.",
  openGraph: {
    title: "Blog — Friction Catalog",
    description:
      "Essays on intentional friction, digital detox, and analog tools.",
  },
};

export default function Blog() {
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
            <Link href="/shop" className="hover:text-[var(--foreground)] transition-colors">
              Shop
            </Link>
            <Link href="/blog" className="text-[var(--foreground)]">
              Blog
            </Link>
            <Link href="/contract" className="hover:text-[var(--foreground)] transition-colors">
              Contract
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">Blog</h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)] leading-relaxed">
          Essays on intentional friction, digital detox, analog tools, and
          protecting your attention.
        </p>

        <div className="mt-12 space-y-10">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-[var(--border)] pb-10">
              <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                <span>&middot;</span>
                <span>{post.readTime}</span>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="mt-2 text-2xl font-bold hover:underline">
                  {post.title}
                </h2>
              </Link>
              <p className="mt-3 text-[var(--muted)] leading-relaxed">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-sm font-semibold hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
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
