'client'

import { type Category } from '@/lib/getCategories';
import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegment } from 'next/dist/client/components/hooks-client';

const CategoryNav = ({ categories }: { categories: Category[] }) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/route-groups" isActive={!selectedLayoutSegment}>
        Home
      </TabNavItem>

      {categories.map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/route-groups/${item.slug}`}
          isActive={item.slug === selectedLayoutSegment}
        >
          {item.name}
        </TabNavItem>
      ))}

      <TabNavItem href="/route-groups/checkout">Checkout</TabNavItem>

      <TabNavItem
        href="/route-groups/blog"
        isActive={'blog' === selectedLayoutSegment}
      >
        Blog
      </TabNavItem>
    </div>
  );
};

export default CategoryNav;
