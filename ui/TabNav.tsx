'client';

import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegment } from 'next/dist/client/components/hooks-client';

export const TabNav = ({
  baseLabel = 'Home',
  basePath,
  items,
}: {
  baseLabel?: string;
  basePath: string;
  items: { name: string; slug: string }[];
}) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href={`/${basePath}`} isActive={!selectedLayoutSegment}>
        {baseLabel}
      </TabNavItem>

      {items.map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/${basePath}/${item.slug}`}
          isActive={item.slug === selectedLayoutSegment}
        >
          {item.name}
        </TabNavItem>
      ))}
    </div>
  );
};
