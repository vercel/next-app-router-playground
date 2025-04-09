'use client';

import type { Item } from '#/ui/tab-group';
import clsx from 'clsx';
import Link, { useLinkStatus } from 'next/link';
import { usePathname } from 'next/navigation';

export const Tab = ({ path, item }: { path: string; item: Item }) => {
  const href = item.slug ? `${path}/${item.slug}` : path;

  return (
    <Link href={href} prefetch={item.prefetch} className="text-sm font-medium">
      <TabContent href={href}>{item.text}</TabContent>
    </Link>
  );
};

// Note: We create an additional component because useLinkStatus should be
// called from a component that is rendered inside a `<Link>`
function TabContent({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const { pending: isPending } = useLinkStatus();

  return (
    <span
      className={clsx('flex rounded-md px-3 py-1 transition duration-75', {
        'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white':
          !isActive && !isPending,
        'bg-vercel-blue text-white': isActive,
        'bg-gray-800 text-gray-500 delay-75': isPending,
      })}
    >
      {children}
    </span>
  );
}
