import { type Category } from '@/lib/getCategories';
import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegment } from 'next/dist/client/components/hooks-client';

const CategoryNav = ({ categories }: { categories: Category[] }) => {
  const selectedLayoutSegement = useSelectedLayoutSegment();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/route-groups" isActive={!selectedLayoutSegement}>
        Home
      </TabNavItem>

      {categories.map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/route-groups/${item.slug}`}
          isActive={item.slug === selectedLayoutSegement}
        >
          {item.name}
        </TabNavItem>
      ))}

      <TabNavItem href="/route-groups/checkout">Checkout</TabNavItem>

      <TabNavItem
        href="/route-groups/blog"
        isActive={'blog' === selectedLayoutSegement}
      >
        Blog
      </TabNavItem>
    </div>
  );
};

export default CategoryNav;
