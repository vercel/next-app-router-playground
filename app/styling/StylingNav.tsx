'client'

import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegment } from 'next/dist/client/components/hooks-client';

const items = [
  {
    name: 'Home',
    slug: '',
  },
  {
    name: 'Global CSS',
    slug: 'global-css',
  },
  {
    name: 'CSS Modules',
    slug: 'css-modules',
  },
  {
    name: 'Styled Components',
    slug: 'styled-components',
  },
  {
    name: 'Styled JSX',
    slug: 'styled-jsx',
  },
  {
    name: 'Tailwind CSS',
    slug: 'tailwind',
  },
];

const StylingNav = () => {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  return (
    <div className="flex items-center space-x-4">
      {items.map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/styling/${item.slug}`}
          isActive={item.slug === selectedLayoutSegment}
        >
          {item.name}
        </TabNavItem>
      ))}
    </div>
  );
};

export default StylingNav;
