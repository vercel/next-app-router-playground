import { Boundary } from '@/ui/Boundary.server';
import { SkeletonCard } from '@/ui/SkeletonCard.server';

// This page demos data fetching without loading UI
// - We move the route out of `./[categorySlug] so that `loading.js` doesn't apply
export const getServerSideProps = async () => {
  // artifical delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    props: {},
  };
};

export default function Page() {
  return (
    <Boundary>
      <div className="space-y-4">
        <div className="text-xl font-medium text-zinc-500">No Loading UI</div>

        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </Boundary>
  );
}
