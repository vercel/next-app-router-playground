import { type Category } from '@/lib/getCategories';
import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegment } from 'next/dist/client/components/hooks-client';

const CategoryNav = ({
  categories,
  useSoftPush,
}: {
  categories: Category[];
  useSoftPush?: boolean;
}) => {
  const selectedLayoutSegement = useSelectedLayoutSegment();
  const lastCategory = categories[categories.length - 1];

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/soft-push" isActive={!selectedLayoutSegement}>
        Home
      </TabNavItem>

      {/* Demo soft push */}
      {categories.slice(0, -1).map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/soft-push/${item.slug}`}
          isActive={item.slug === selectedLayoutSegement}
          useSoftPush={useSoftPush}
        >
          {item.name}
        </TabNavItem>
      ))}

      {/* Demo hard push */}
      <TabNavItem
        key={lastCategory.slug}
        href={`/soft-push/${lastCategory.slug}`}
        isActive={lastCategory.slug === selectedLayoutSegement}
      >
        {lastCategory.name} (Hard push)
      </TabNavItem>
    </div>
  );
};

export default CategoryNav;
