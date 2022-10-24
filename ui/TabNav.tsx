'use client';

import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegments } from 'next/navigation';

export const TabNav = ({
  baseLabel = 'Home',
  basePath,
  items,
}: {
  baseLabel?: string;
  basePath: string;
  items: { name: string; slug: string }[];
}) => {
  const selectedLayoutSegments = useSelectedLayoutSegments();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href={`/${basePath}`} isActive={!selectedLayoutSegments}>
        {baseLabel}
      </TabNavItem>

      {items.map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/${basePath}/${item.slug}`}
          isActive={selectedLayoutSegments.includes(item.slug)}
        >
          {item.name}
        </TabNavItem>
      ))}
    </div>
  );
};
