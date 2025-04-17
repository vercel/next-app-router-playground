import clsx from 'clsx';

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx('prose prose-sm prose-invert max-w-none', className)}>
      {children}
    </div>
  );
}
