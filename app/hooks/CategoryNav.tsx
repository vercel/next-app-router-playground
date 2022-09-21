'client'

import { type Category } from '@/lib/getCategories';
import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegment } from 'next/dist/client/components/hooks-client';

const CategoryNav = ({ categories }: { categories: Category[] }) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/hooks" isActive={!selectedLayoutSegment}>
        Home
      </TabNavItem>

      {categories.map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/hooks/${item.slug}?key=value`}
          isActive={item.slug === selectedLayoutSegment}
        >
          {item.name}
        </TabNavItem>
      ))}
    </div>
  );
};

export default CategoryNav;
