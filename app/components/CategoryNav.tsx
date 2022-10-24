'use client';

import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegments } from 'next/navigation';

const CategoryNav = () => {
  const selectedLayoutSegments = useSelectedLayoutSegments();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/components" isActive={!selectedLayoutSegments}>
        Home
      </TabNavItem>

      <TabNavItem
        href="/components/electronics"
        isActive={selectedLayoutSegments.includes('electronics')}
      >
        Client Components Only
      </TabNavItem>

      <TabNavItem
        href="/components/clothing"
        isActive={selectedLayoutSegments.includes('clothing')}
      >
        Client and Server Components
      </TabNavItem>
    </div>
  );
};

export default CategoryNav;
