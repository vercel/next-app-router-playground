import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <nav>
        <Link href="/parallel-routes-2/a1">Go to A1</Link>
        <Link href="/parallel-routes-2/a2">Go to A2</Link>
      </nav>
    </div>
  );
}
