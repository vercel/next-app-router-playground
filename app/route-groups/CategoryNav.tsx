'use client';

import { type Category } from '@/lib/types';
import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegments } from 'next/navigation';

const CategoryNav = ({ categories }: { categories: Category[] }) => {
  const selectedLayoutSegment = useSelectedLayoutSegments();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/route-groups" isActive={!selectedLayoutSegment}>
        Home
      </TabNavItem>

      {categories.map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/route-groups/${item.slug}`}
          isActive={selectedLayoutSegment.includes(item.slug)}
        >
          {item.name}
        </TabNavItem>
      ))}

      <TabNavItem href="/route-groups/checkout">Checkout</TabNavItem>

      <TabNavItem
        href="/route-groups/blog"
        isActive={selectedLayoutSegment.includes('blog')}
      >
        Blog
      </TabNavItem>
    </div>
  );
};

export default CategoryNav;
