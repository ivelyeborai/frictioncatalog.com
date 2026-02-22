export function Footer() {
  return (
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
          &copy; {new Date().getFullYear()} Friction Catalog &middot; For The
          People, Always
        </p>
      </div>
    </footer>
  );
}
