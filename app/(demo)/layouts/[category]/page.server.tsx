import { getCategories } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import { Counter } from '@/ui/Counter.client';
import { SkeletonCard } from '@/ui/SkeletonCard.server';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.params!;

  return {
    props: {
      category: getCategories().find((x) => x.slug === category),
    },
  };
};
export default function Page({
  children,
  category,
}: {
  children: React.ReactNode;
  category: ReturnType<typeof getCategories>[0];
}) {
  return (
    <Boundary>
      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
        <div>{/* <Counter /> */}</div>
      </div>
    </Boundary>
  );
}
