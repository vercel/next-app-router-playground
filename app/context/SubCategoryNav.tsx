'use client';

import { type Category } from '@/lib/getCategories';
import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegment } from 'next/navigation';

const SubCategoryNav = ({ category }: { category: Category }) => {
  const [selectedLayoutSegment] = useSelectedLayoutSegment();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem
        href={`/context/${category.slug}`}
        isActive={!selectedLayoutSegment}
      >
        All
      </TabNavItem>

      {category.items.map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/context/${category.slug}/${item.slug}`}
          isActive={item.slug === selectedLayoutSegment}
        >
          {item.name}
        </TabNavItem>
      ))}
    </div>
  );
};

export default SubCategoryNav;
