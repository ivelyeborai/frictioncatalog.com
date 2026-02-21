import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} — Friction Catalog`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="mt-10 mb-4 text-2xl font-bold">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="mt-8 mb-3 text-xl font-bold">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- **")) {
      elements.push(
        <li key={i} className="ml-5 mb-2 list-disc leading-relaxed">
          <span
            dangerouslySetInnerHTML={{
              __html: line
                .slice(2)
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(
                  /\[(.*?)\]\((.*?)\)/g,
                  '<a href="$2" class="underline hover:opacity-70">$1</a>'
                ),
            }}
          />
        </li>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="ml-5 mb-2 list-disc leading-relaxed">
          <span
            dangerouslySetInnerHTML={{
              __html: line
                .slice(2)
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(
                  /\[(.*?)\]\((.*?)\)/g,
                  '<a href="$2" class="underline hover:opacity-70">$1</a>'
                ),
            }}
          />
        </li>
      );
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      elements.push(
        <p
          key={i}
          className="mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              .replace(
                /\[(.*?)\]\((.*?)\)/g,
                '<a href="$2" class="underline hover:opacity-70">$1</a>'
              ),
          }}
        />
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

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
            <Link href="/blog" className="hover:text-[var(--foreground)] transition-colors">
              Blog
            </Link>
            <Link href="/contract" className="hover:text-[var(--foreground)] transition-colors">
              Contract
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/blog"
          className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
        >
          ← Back to Blog
        </Link>

        <article className="mt-8">
          <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
            <time>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
            {post.description}
          </p>

          <div className="mt-10 text-[var(--foreground)]">
            {renderMarkdown(post.content)}
          </div>
        </article>

        {/* Related posts */}
        <div className="mt-16 border-t border-[var(--border)] pt-10">
          <h2 className="text-xl font-bold">More from the Blog</h2>
          <div className="mt-4 space-y-4">
            {posts
              .filter((p) => p.slug !== post.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block rounded-lg border border-[var(--border)] p-4 transition-shadow hover:shadow-md"
                >
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {p.readTime}
                  </p>
                </Link>
              ))}
          </div>
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
