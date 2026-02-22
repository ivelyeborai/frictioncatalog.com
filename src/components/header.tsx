"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/contract", label: "Contract" },
] as const;

export function Header() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="border-b border-[var(--border)]">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-extrabold tracking-tight">
          FRICTION CATALOG
        </Link>
        <div className="flex gap-6 text-sm font-semibold text-[var(--muted)]">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                isActive(href)
                  ? "text-[var(--foreground)]"
                  : "hover:text-[var(--foreground)] transition-colors"
              }
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
