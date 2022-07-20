import { type Category } from '@/lib/getCategories';
import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegment } from 'next/dist/client/components/hooks-client';

const CategoryNav = ({ categories }: { categories: Category[] }) => {
  const selectedLayoutSegement = useSelectedLayoutSegment();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/loading" isActive={!selectedLayoutSegement}>
        Home
      </TabNavItem>

      {categories.map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/loading/${item.slug}`}
          isActive={item.slug === selectedLayoutSegement}
        >
          {item.name}
        </TabNavItem>
      ))}

      <TabNavItem
        href={`/loading/no-loading`}
        isActive={'no-loading' === selectedLayoutSegement}
      >
        No Loading UI
      </TabNavItem>
    </div>
  );
};

export default CategoryNav;
