import { getCategories, type Category } from '@/lib/getCategories';
import ClickCounter from '@/ui/ClickCounter';
import { GetServerSideProps } from 'next';
import SubCategoryNav from './SubCategoryNav';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categorySlug } = context.params!;

  return {
    props: {
      category: getCategories().find(
        (category) => category.slug === categorySlug,
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
      <div>
        <div className="flex items-center justify-between">
          <SubCategoryNav category={category} />
          <ClickCounter />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
