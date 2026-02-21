import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.description,
    openGraph: {
      title: `${product.name} — Friction Catalog`,
      description: product.tagline,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    offers: {
      "@type": "Offer",
      price: product.price.replace("$", ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: product.url,
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <header className="border-b border-[var(--border)]">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-extrabold tracking-tight">
            FRICTION CATALOG
          </Link>
          <div className="flex gap-6 text-sm font-semibold text-[var(--muted)]">
            <Link
              href="/"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#shop"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/contract"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              Contract
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-[var(--muted)]">
          <Link href="/" className="hover:text-[var(--foreground)]">
            Home
          </Link>
          {" / "}
          <Link href="/#shop" className="hover:text-[var(--foreground)]">
            Shop
          </Link>
          {" / "}
          <span className="text-[var(--foreground)]">{product.name}</span>
        </div>

        <div className="grid gap-12 md:grid-cols-[1fr_320px]">
          {/* Main content */}
          <div>
            <span className="text-5xl">{product.emoji}</span>
            <span className="ml-3 inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-[var(--muted)]">
              {product.category}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 text-lg text-[var(--muted)] leading-relaxed">
              {product.tagline}
            </p>
            <p className="mt-6 leading-relaxed text-[var(--foreground)]">
              {product.description}
            </p>

            {/* Why Friction */}
            <div className="mt-10">
              <h2 className="text-xl font-bold">Why This Has Friction</h2>
              <p className="mt-3 font-mono text-sm leading-relaxed text-[var(--muted)]">
                {product.whyFriction}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:sticky md:top-8 h-fit">
            <div className="rounded-lg border border-[var(--border)] p-6">
              <span className="font-mono text-3xl font-bold">
                {product.price}
              </span>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80"
              >
                Buy on Amazon
              </a>
              <p className="mt-3 text-xs text-center text-[var(--muted)]">
                Affiliate link — supports Friction Catalog
              </p>

              {/* Features */}
              <div className="mt-6 border-t border-[var(--border)] pt-4">
                <h3 className="text-sm font-semibold mb-3">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-[var(--muted)]"
                    >
                      <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Other products */}
        <div className="mt-20 border-t border-[var(--border)] pt-12">
          <h2 className="text-2xl font-extrabold tracking-tight">
            More Intentional Tools
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products
              .filter((p) => p.slug !== product.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/shop/${p.slug}`}
                  className="rounded-lg border border-[var(--border)] p-4 transition-shadow hover:shadow-md"
                >
                  <span className="text-2xl">{p.emoji}</span>
                  <h3 className="mt-2 text-sm font-semibold">{p.name}</h3>
                  <p className="mt-1 font-mono text-sm font-bold">
                    {p.price}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <p className="text-sm text-[var(--muted)]">
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
