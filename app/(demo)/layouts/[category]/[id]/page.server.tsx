import { getCategories } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import { SkeletonCard } from '@/ui/SkeletonCard.server';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category, id } = context.params!;

  const mainCategory = getCategories().find((x) => x.slug === category);
  const subCategory = mainCategory?.items.find((x) => x.slug === id);

  return {
    props: {
      category: subCategory,
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
        {/* <div>
        <Counter />
      </div> */}
      </div>
    </Boundary>
  );
}
