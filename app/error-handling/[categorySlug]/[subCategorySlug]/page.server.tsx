import { getCategories } from '@/lib/getCategories';
import BuggyButton from '@/ui/BuggyButton.client';
import { SkeletonCard } from '@/ui/SkeletonCard.server';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categorySlug, subCategorySlug } = context.params!;

  const category = getCategories().find(
    (category) => category.slug === categorySlug,
  );

  return {
    props: {
      category: category?.items.find(
        (category) => category.slug === subCategorySlug,
      ),
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
      <div className="flex justify-between  space-x-3">
        <div className="text-xl font-medium text-zinc-500">{category.name}</div>

        <BuggyButton />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
