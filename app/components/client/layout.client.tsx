import { getCategories } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import { ComponentTree } from '@/ui/ComponentTree.server';
import SubCategoryNav from './SubCategoryNav.client';

export default function Layout({ children }: { children: React.ReactNode }) {
  // In production, we would not "fetch" data this way.
  const category = getCategories().find(
    (category) => category.slug === 'electronics',
  )!;
  return (
    <div className="space-y-9">
      <div className="text-white">
        In this section, only client components are used.
      </div>

      {/* TODO: Add real component bundle sizes */}
      <ComponentTree
        items={[
          {
            name: 'RootLayout',
            type: 'server',
            size: 1000,
            children: [
              {
                name: 'CategoryNav',
                type: 'client',
                size: 2000,
                children: [
                  {
                    name: 'TabNavItem',
                    type: 'client',
                    size: 400,
                    duplicates: 4,
                    children: [
                      {
                        name: 'LinkComponent',
                        type: 'client',
                        size: 3000,
                      },
                    ],
                  },
                ],
              },
              { name: 'ClickCounter', type: 'client', size: 400 },
              {
                name: 'CategoryLayout',
                type: 'client',
                size: 1000,
                children: [
                  {
                    name: 'SubCategoryNav',
                    type: 'client',
                    size: 3000,
                    children: [
                      {
                        name: 'TabNavItem',
                        type: 'client',
                        size: 400,
                        duplicates: 4,
                        children: [
                          {
                            name: 'LinkComponent',
                            type: 'client',
                            size: 3000,
                          },
                        ],
                      },
                    ],
                  },
                  { name: 'ClickCounter', type: 'client', size: 400 },
                  {
                    name: 'SubCategoryLayout',
                    type: 'client',
                    size: 1000,
                    children: [
                      {
                        name: 'SubCategoryPage',
                        type: 'client',
                        size: 2000,
                        children: [
                          { name: 'Title', type: 'client', size: 2000 },
                          {
                            name: 'SkeletonCard',
                            type: 'client',
                            size: 1000,
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
