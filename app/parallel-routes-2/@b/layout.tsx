import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <Link href="/parallel-routes-2/b1">B1</Link>
        <Link href="/parallel-routes-2/b2">B2</Link>
      </nav>
      {children}
    </div>
  );
}
