import { type Category } from '@/lib/getCategories';
import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegment } from 'next/dist/client/components/hooks-client';

const SubCategoryNav = ({ category }: { category: Category }) => {
  const selectedLayoutSegement = useSelectedLayoutSegment();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem
        href={`/route-groups/${category.slug}`}
        isActive={!selectedLayoutSegement}
      >
        All
      </TabNavItem>

      {category.items.map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/route-groups/${category.slug}/${item.slug}`}
          isActive={item.slug === selectedLayoutSegement}
        >
          {item.name}
        </TabNavItem>
      ))}
    </div>
  );
};

export default SubCategoryNav;
