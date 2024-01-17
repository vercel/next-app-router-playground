import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <nav>
        <Link href="/parallel-routes-2/b1">Go to B1</Link>
        <Link href="/parallel-routes-2/b2">Go to B2</Link>
      </nav>
    </div>
  );
}
