import { getCategories } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import { SkeletonCard } from '@/ui/SkeletonCard.server';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  return {
    props: {
      category: getCategories().find((x) => x.slug === id),
    },
  };
};

export default function Page({
  category,
}: {
  category: ReturnType<typeof getCategories>[0];
}) {
  console.log(category);
  return (
    <Boundary>
      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
        {/* <div>
        <Counter />
      </div> */}
      </div>
    </Boundary>
  );
}
