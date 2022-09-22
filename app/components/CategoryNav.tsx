'client'

import { type Category } from '@/lib/getCategories';
import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegment } from 'next/dist/client/components/hooks-client';

const CategoryNav = () => {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/components" isActive={!selectedLayoutSegment}>
        Home
      </TabNavItem>

      <TabNavItem
        href="/components/electronics"
        isActive={'electronics' === selectedLayoutSegment}
      >
        Client Components Only
      </TabNavItem>

      <TabNavItem
        href="/components/clothing"
        isActive={'clothing' === selectedLayoutSegment}
      >
        Client and Server Components
      </TabNavItem>
    </div>
  );
};

export default CategoryNav;
