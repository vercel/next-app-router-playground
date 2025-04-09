'use client';

import type { Item } from '#/ui/tab-group';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Tab = ({ path, item }: { path: string; item: Item }) => {
  const href = item.slug ? `${path}/${item.slug}` : path;

  return (
    <Link href={href} prefetch={item.prefetch} className="text-sm font-medium">
      <TabContent href={href}>{item.text}</TabContent>
    </Link>
  );
};

function TabContent({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <span
      className={clsx('flex rounded-md px-3 py-1', {
        'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white':
          !isActive,
        'bg-vercel-blue text-white': isActive,
      })}
    >
      {children}
    </span>
  );
}
