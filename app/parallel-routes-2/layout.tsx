import Link from 'next/link';

export default function Layout({
  children,
  a,
  b,
  c,
}: {
  children: React.ReactNode;
  a: React.ReactNode;
  b: React.ReactNode;
  c: React.ReactNode;
}) {
  return (
    <>
      <nav className="flex gap-3">
        <Link href="/parallel-routes-2">Go to main page</Link>
        <Link href="/parallel-routes-2/a1">Go to a1</Link>
        <Link href="/parallel-routes-2/a2">Go to a2</Link>
        <Link href="/parallel-routes-2/b1">Go to b1</Link>
        <Link href="/parallel-routes-2/b2">Go to b2</Link>
        <Link href="/parallel-routes-2/c1">Go to c1</Link>
        <Link href="/parallel-routes-2/c2">Go to c2</Link>
      </nav>
      {children}
      {a}
      {b}
      {c}
    </>
  );
}
