import { getCategories, type Category } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
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
      <Boundary>
        <div className="space-y-9">
          <SubCategoryNav category={category} />

          <div>{children}</div>
        </div>
      </Boundary>
    </div>
  );
}
