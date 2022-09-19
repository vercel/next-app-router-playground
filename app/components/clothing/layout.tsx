import { getCategories, type Category } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary';
import { ComponentTree } from '@/ui/ComponentTree';
import SubCategoryNav from '../SubCategoryNav.client';
export const getServerSideProps = async () => {
  return {
    props: {
      category: getCategories().find(
        (category) => category.slug === 'clothing',
      ),
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
