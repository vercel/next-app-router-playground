import { type Category } from '@/lib/getCategories';
import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegment } from 'next/dist/client/components/hooks-client';

const CategoryNav = () => {
  const selectedLayoutSegement = useSelectedLayoutSegment();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/components" isActive={!selectedLayoutSegement}>
        Home
      </TabNavItem>

      <TabNavItem
        href="/components/client"
        isActive={'client' === selectedLayoutSegement}
      >
        Client Components Only
      </TabNavItem>

      <TabNavItem
        href="/components/client-and-server"
        isActive={'client-and-server' === selectedLayoutSegement}
      >
        Client and Server Components
      </TabNavItem>
    </div>
  );
};

export default CategoryNav;
