import { type Category } from '@/lib/getCategories';
import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegment } from 'next/dist/client/components/hooks-client';

const CategoryNav = ({ categories }: { categories: Category[] }) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/loading" isActive={!selectedLayoutSegment}>
        Home
      </TabNavItem>

      {categories.map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/loading/${item.slug}`}
          isActive={item.slug === selectedLayoutSegment}
        >
          {item.name}
        </TabNavItem>
      ))}

      <TabNavItem
        href={`/loading/no-loading`}
        isActive={'no-loading' === selectedLayoutSegment}
      >
        No Loading UI
      </TabNavItem>
    </div>
  );
};

export default CategoryNav;
