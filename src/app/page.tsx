import Link from "next/link";

const products = [
  {
    emoji: "📱",
    name: "Nokia 2780 Flip",
    price: "$88.99",
    description:
      "The phone that makes you think before you text. 4G, KaiOS, no infinite scroll.",
    url: "https://amzn.to/4rnEBRv",
  },
  {
    emoji: "📷",
    name: "Kodak M35 Film Camera",
    price: "$59.99",
    description:
      "35mm film. 36 shots. No do-overs. Every frame matters.",
    url: "https://amzn.to/4bWVBcH",
  },
  {
    emoji: "📡",
    name: "Motorola T100 Talkabout",
    price: "$27.49",
    description:
      "Basic 16-mile range. Perfect for coordinating without screens.",
    url: "https://amzn.to/4qqz4Jb",
  },
  {
    emoji: "📻",
    name: "Midland GXT1000VP4",
    price: "$74.99",
    description:
      "Serious 36-mile range. NOAA weather alerts. For when communication matters.",
    url: "https://amzn.to/4rjDP7Q",
  },
  {
    emoji: "📓",
    name: "Leuchtturm1917 Hardcover",
    price: "$31.50",
    description:
      "Dotted notebook. Paper that doesn't judge. 249 pages of actual thought.",
    url: "https://amzn.to/4qb4zH1",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-[var(--border)]">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-extrabold tracking-tight">
            FRICTION CATALOG
          </Link>
          <div className="flex gap-6 text-sm font-semibold text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
              Home
            </Link>
            <a href="#shop" className="hover:text-[var(--foreground)] transition-colors">
              Shop
            </a>
            <Link href="/contract" className="hover:text-[var(--foreground)] transition-colors">
              Contract
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Technology That Makes You Think
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--muted)] leading-relaxed">
          Every tool here introduces intentional friction — space between stimulus
          and response.
        </p>
        <p className="mt-4 max-w-2xl text-base text-[var(--muted)] leading-relaxed">
          Not punishment. Not deprivation. Space for choice. These tools don&apos;t
          make you more productive. They make you more present. That friction is
          where freedom lives.
        </p>
      </section>

      {/* Products */}
      <section id="shop" className="mx-auto max-w-4xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col justify-between rounded-lg border border-[var(--border)] p-6 transition-shadow hover:shadow-md"
            >
              <div>
                <span className="text-3xl">{product.emoji}</span>
                <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  {product.description}
                </p>
              </div>
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
      </section>

      {/* Contract */}
      <section id="contract" className="border-t border-[var(--border)] bg-neutral-50">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Parent-Child Technology Contract
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Create a shared agreement around technology use. Built for families,
            powered by intention.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contract/create"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80"
            >
              Start Creating →
            </Link>
            <a
              href="/blank-contract.pdf"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold transition-colors hover:bg-neutral-100"
            >
              Download Blank PDF
            </a>
          </div>
          <div className="mt-4 flex gap-6 text-xs text-[var(--muted)]">
            <span>Interactive form · Digital signatures · PDF download</span>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Why Friction?
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 font-mono text-sm leading-relaxed text-[var(--muted)]">
            <p>
              Your phone doesn&apos;t have friction. Between &ldquo;I
              wonder...&rdquo; and checking, there&apos;s nothing. No pause. No
              choice. Just stimulus → response.
            </p>
            <p>
              A flip phone has friction. You have to open it. Type on buttons.
              That delay? That&apos;s where your agency lives.
            </p>
            <p>
              These tools don&apos;t make you faster. They make you freer.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <p className="text-sm text-[var(--muted)]">
            Technology that creates space. Not anti-technology.
            Pro-intentionality. Every product here makes you think before you act.
          </p>
          <p className="mt-4 text-xs text-[var(--muted)]">
            As an Amazon Associate, Friction Catalog earns from qualifying
            purchases. This doesn&apos;t affect our recommendations — we only
            list tools we believe in.
          </p>
          <p className="mt-4 text-xs text-[var(--muted)]">
            © 2026 Friction Catalog · For The People, Always
          </p>
        </div>
      </footer>
    </div>
  );
}
