export default function Layout({
  children,
  a,
  b,
}: {
  children: React.ReactNode;
  a: React.ReactNode;
  b: React.ReactNode;
}) {
  return (
    <>
      {children}
      {a}
      {b}
    </>
  );
}
