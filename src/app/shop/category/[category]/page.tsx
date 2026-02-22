import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  products,
  categories,
  categorySlug,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/data/products";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return categories.map((c) => ({ category: categorySlug(c) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category} — Intentional Tools`,
    description: `Browse ${category.toLowerCase()} products that introduce intentional friction between impulse and action.`,
    openGraph: {
      title: `${category} — Friction Catalog`,
      description: `Intentional ${category.toLowerCase()} tools curated by Friction Catalog.`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const filtered = getProductsByCategory(category);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-8 text-sm text-[var(--muted)]">
          <Link href="/" className="hover:text-[var(--foreground)]">
            Home
          </Link>
          {" / "}
          <Link href="/shop" className="hover:text-[var(--foreground)]">
            Shop
          </Link>
          {" / "}
          <span className="text-[var(--foreground)]">{category}</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight">{category}</h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)] leading-relaxed">
          Intentional {category.toLowerCase()} tools that introduce friction
          between impulse and action.
        </p>

        {/* Category pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          <Link
            href="/shop"
            className="rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-semibold text-[var(--muted)] hover:bg-neutral-200 transition-colors"
          >
            All ({products.length})
          </Link>
          {categories.map((cat) => {
            const count = getProductsByCategory(cat).length;
            const isActive = cat === category;
            return (
              <Link
                key={cat}
                href={`/shop/category/${categorySlug(cat)}`}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[var(--accent)] text-white"
                    : "bg-neutral-100 text-[var(--muted)] hover:bg-neutral-200"
                }`}
              >
                {cat} ({count})
              </Link>
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

      <Footer />
    </div>
  );
}
