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

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/soft-push" isActive={!selectedLayoutSegement}>
        Home
      </TabNavItem>

      {categories.map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/soft-push/${item.slug}`}
          isActive={item.slug === selectedLayoutSegement}
          useSoftPush={useSoftPush}
        >
          {item.name}
        </TabNavItem>
      ))}
    </div>
  );
};

export default CategoryNav;
