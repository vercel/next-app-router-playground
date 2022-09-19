import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegment } from 'next/dist/client/components/hooks-client';

const CategoryNav = () => {
  const selectedLayoutSegement = useSelectedLayoutSegment();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/temp" isActive={!selectedLayoutSegement}>
        Home
      </TabNavItem>

      <TabNavItem
        href="/temp/clothing"
        isActive={'clothing' === selectedLayoutSegement}
      >
        Clothing
      </TabNavItem>
    </div>
  );
};

export default CategoryNav;
