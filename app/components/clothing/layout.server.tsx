import { getCategories, type Category } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import { ComponentTree } from '@/ui/ComponentTree.server';
import Counter from '@/ui/Counter.client';
import SubCategoryNav from './SubCategoryNav.client';
export const getServerSideProps = async () => {
  return {
    props: {
      category: getCategories().find((x) => x.slug === 'clothing'),
    },
  };
};

export default function Layout({
  children,
  category,
}: {
  children: React.ReactNode;
  category: Category;
}) {
  return (
    <Boundary>
      <div className="space-y-9">
        <div className="text-white">
          In this section, components are React Server Components unless they
          need to be a client component.
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
                  size: 2,
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
                  type: 'server',
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
                      type: 'server',
                      size: 1,
                      children: [
                        {
                          name: 'SubCategoryPage',
                          type: 'server',
                          size: 2,
                          children: [
                            { name: 'Title', type: 'server', size: 2 },
                            {
                              name: 'SkeletonCard',
                              duplicates: 4,
                              size: 1,
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

        <div className="flex items-stretch justify-between">
          <SubCategoryNav category={category} />
        </div>

        <div>{children}</div>
      </div>
    </Boundary>
  );
}
