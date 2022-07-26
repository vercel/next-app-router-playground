import { getCategories } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import { ComponentTree } from '@/ui/ComponentTree.server';
import Counter from '@/ui/Counter.client';
import SubCategoryNav from './SubCategoryNav.client';

export default function Layout({ children }: { children: React.ReactNode }) {
  // In production, we would not "fetch" data this way.
  const category = getCategories().find((x) => x.slug === 'electronics')!;
  return (
    <div className="space-y-9">
      <div className="text-white">
        In this section all components are deliberately client components
      </div>

      {/* TODO: Add real component bundle sizes */}

      <ComponentTree
        items={[
          {
            name: 'RootLayout',
            type: 'server',
            size: 1,
            children: [
              {
                name: 'CategoryNav',
                type: 'client',
                size: 3,
                children: [
                  {
                    name: 'TabNavItem',
                    type: 'client',
                    size: 0.4,
                    duplicates: 4,
                    children: [
                      {
                        name: 'LinkComponent',
                        type: 'client',
                        size: 3,
                      },
                    ],
                  },
                ],
              },
              { name: 'ClickCounter', type: 'client', size: 0.4 },
              {
                name: 'CategoryLayout',
                type: 'client',
                size: 1,
                children: [
                  {
                    name: 'SubCategoryNav',
                    type: 'client',
                    size: 3,
                    children: [
                      {
                        name: 'TabNavItem',
                        type: 'client',
                        size: 0.4,
                        duplicates: 4,
                        children: [
                          {
                            name: 'LinkComponent',
                            type: 'client',
                            size: 3,
                          },
                        ],
                      },
                    ],
                  },
                  { name: 'ClickCounter', type: 'client', size: 0.4 },
                  {
                    name: 'SubCategoryLayout',
                    type: 'client',
                    size: 1,
                    children: [
                      {
                        name: 'SubCategoryPage',
                        type: 'client',
                        size: 2,
                        children: [
                          { name: 'Title', type: 'client', size: 2 },
                          {
                            name: 'SkeletonCard',
                            type: 'client',
                            size: 1,
                            duplicates: 4,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ]}
      />

      <Boundary>
        <div className="space-y-9">
          <div className="flex items-stretch justify-between">
            <SubCategoryNav category={category} />
          </div>

          <div>{children}</div>
        </div>
      </Boundary>
    </div>
  );
}
