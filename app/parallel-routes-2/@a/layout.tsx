import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <Link href="/parallel-routes-2/a1">A1</Link>
        <Link href="/parallel-routes-2/a2">A2</Link>
      </nav>
      {children}
    </div>
  );
}
