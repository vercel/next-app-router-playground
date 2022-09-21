import { fetchCategoryBySlug, getCategories } from '@/lib/getCategories';
import { experimental_use as use } from 'react';
import { ComponentTree } from '@/ui/ComponentTree';
import SubCategoryNav from '../SubCategoryNav';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const category = use(fetchCategoryBySlug('clothing'))
  if (!category) return null

  return (
    <div className="space-y-9">
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
                type: 'server',
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
                    type: 'server',
                    size: 1000,
                    children: [
                      {
                        name: 'SubCategoryPage',
                        type: 'server',
                        size: 2000,
                        children: [
                          { name: 'Title', type: 'server', size: 2000 },
                          {
                            name: 'SkeletonCard',
                            size: 1000,
                            type: 'server',
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

      <div className="space-y-9">
        <SubCategoryNav category={category} />

        <div>{children}</div>
      </div>
    </div>
  );
}
