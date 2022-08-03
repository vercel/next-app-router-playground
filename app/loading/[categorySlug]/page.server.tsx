import { getCategories, type Category } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import { SkeletonCard } from '@/ui/SkeletonCard.server';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categorySlug } = context.params!;

  // artificial delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

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
    <Boundary>
      <div className="space-y-4">
        <div className="text-xl font-medium text-zinc-500">{category.name}</div>

        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: category.count }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </Boundary>
  );
}
