import { getCategories, type Category } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import Counter from '@/ui/Counter.client';
import { GetServerSideProps } from 'next';
import SubCategoryNav from './SubCategoryNav.client';
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categorySlug } = context.params!;

  return {
    props: {
      category: getCategories().find((x) => x.slug === categorySlug),
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
        <div className="flex items-stretch justify-between">
          <Boundary
            size="small"
            labels={['Client', '1KB']}
            color="blue"
            animateRerendering={false}
          >
            <SubCategoryNav category={category} />
          </Boundary>

          <Boundary
            size="small"
            labels={['Client', '1KB']}
            color="blue"
            animateRerendering={false}
          >
            <Counter />
          </Boundary>
        </div>

        <div>{children}</div>
      </div>
    </Boundary>
  );
}
