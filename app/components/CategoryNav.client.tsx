import { type Category } from '@/lib/getCategories';
import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegment } from 'next/dist/client/components/hooks-client';

const CategoryNav = ({ categories }: { categories: Category[] }) => {
  const selectedLayoutSegement = useSelectedLayoutSegment();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/components" isActive={!selectedLayoutSegement}>
        Home
      </TabNavItem>

      <TabNavItem
        href="/components/electronics"
        isActive={'electronics' === selectedLayoutSegement}
      >
        Client Components Only
      </TabNavItem>

      <TabNavItem
        href="/components/clothing"
        isActive={'clothing' === selectedLayoutSegement}
      >
        Client and Server Components
      </TabNavItem>
    </div>
  );
};

export default CategoryNav;
