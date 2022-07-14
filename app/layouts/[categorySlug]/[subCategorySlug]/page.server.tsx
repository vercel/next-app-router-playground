import { getCategories } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import { SkeletonCard } from '@/ui/SkeletonCard.server';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categorySlug, subCategorySlug } = context.params!;

  const category = getCategories().find((x) => x.slug === categorySlug);

  return {
    props: {
      category: category?.items.find((x) => x.slug === subCategorySlug),
    },
  };
};

export default function Page({
  category,
}: {
  category: ReturnType<typeof getCategories>[0];
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
