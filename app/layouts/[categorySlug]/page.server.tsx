import { getCategories, type Category } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import { SkeletonCard } from '@/ui/SkeletonCard.server';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categorySlug } = context.params!;

  return {
    props: {
      category: getCategories().find((x) => x.slug === categorySlug),
    },
  };
};
export default function Page({
  children,
  category,
}: {
  children: React.ReactNode;
  category: Category;
}) {
  return (
    <Boundary>
      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </Boundary>
  );
}
