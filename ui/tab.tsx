'use client';

import type { Item } from '#/ui/tab-group';
import clsx from 'clsx';
import Link from 'next/link';
import {
  usePathname,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';

export const Tab = ({
  path,
  parallelRoutesKey,
  item,
}: {
  path: string;
  parallelRoutesKey?: string;
  item: Item;
}) => {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment(parallelRoutesKey);
  const segments = useSelectedLayoutSegments(parallelRoutesKey);
  const href = item.slug ? path + '/' + item.slug : path;
  const isActive =
    // Example home pages e.g. `/layouts`
    (!item.slug && segment === null) ||
    segment === item.segment ||
    // Nested pages e.g. `/layouts/electronics`
    segment === item.slug;

  console.log(
    JSON.stringify(
      {
        pathname,
        tabSlug: item.slug,
        segment,
        segments,
        parallelRoutesKey,
      },
      null,
      2,
    ),
  );

  return (
    <Link
      href={href}
      className={clsx('rounded-lg px-3 py-1 text-sm font-medium', {
        'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white':
          !isActive,
        'bg-vercel-blue text-white': isActive,
      })}
    >
      {item.text}
    </Link>
  );
};
