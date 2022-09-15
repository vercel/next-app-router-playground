import { getCategories } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import { SkeletonCard } from '@/ui/SkeletonCard.server';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { subCategorySlug } = context.params!;

  const category = getCategories().find((x) => x.slug === 'clothing');

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
    <div className="space-y-4">
      <div className="text-xl font-medium text-zinc-500">{category.name}</div>

      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
