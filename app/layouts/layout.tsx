import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial", margin: 0 }}>
        {/* Simple global header nav */}
        <header style={{ borderBottom: "1px solid #e5e7eb", background: "#fff" }}>
          <nav style={{ maxWidth: 1024, margin: "0 auto", display: "flex", gap: 16, alignItems: "center", padding: "12px 16px" }}>
            <Link href="/" style={{ fontWeight: 700, textDecoration: "none" }}>
              ScoutLine Beta
            </Link>
            <span style={{ marginLeft: "auto", display: "flex", gap: 12 }}>
              <Link href="/" style={{ textDecoration: "none" }}>Home</Link>
              <Link href="/admin" style={{ textDecoration: "none" }}>Admin</Link>
              <Link href="/player" style={{ textDecoration: "none" }}>Player</Link>
              <Link href="/coach" style={{ textDecoration: "none" }}>Coach</Link>
            </span>
          </nav>
        </header>

        <main style={{ padding: 24, maxWidth: 1024, margin: "0 auto" }}>{children}</main>

        <footer style={{ borderTop: "1px solid #e5e7eb", padding: "12px 16px", color: "#6b7280", fontSize: 12, textAlign: "center" }}>
          © {new Date().getFullYear()} ScoutLine • Beta
        </footer>
      </body>
    </html>
  );
}
