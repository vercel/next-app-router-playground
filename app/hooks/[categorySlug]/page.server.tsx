import { getCategories, type Category } from '@/lib/getCategories';
import { SkeletonCard } from '@/ui/SkeletonCard.server';
import { GetServerSideProps } from 'next';

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
export default function Page({ category }: { category: Category }) {
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-zinc-500">
        All {category.name}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
