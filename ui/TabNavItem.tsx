import clsx from 'clsx';
import Link from 'next/link';

export const TabNavItem = ({
  children,
  href,
  isActive,
}: {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        'rounded-lg bg-zinc-700 px-2.5 py-0.5 text-sm font-medium',
        {
          'text-zinc-100 hover:bg-blue-600 hover:text-white': !isActive,
          'bg-blue-600 text-white': isActive,
        },
      )}
    >
      {children}
    </Link>
  );
};
