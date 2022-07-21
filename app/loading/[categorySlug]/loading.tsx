import { Boundary } from '@/ui/Boundary.server';
import { SkeletonCard } from '@/ui/SkeletonCard.server';
export default function Loading() {
  return (
    <Boundary animateRerendering={false} color="pink">
      <div className="space-y-4">
        <div className="text-xl font-medium text-zinc-500">Loading...</div>

        <div className="grid grid-cols-3 gap-6">
          <SkeletonCard isLoading={true} />
          <SkeletonCard isLoading={true} />
          <SkeletonCard isLoading={true} />
          <SkeletonCard isLoading={true} />
          <SkeletonCard isLoading={true} />
          <SkeletonCard isLoading={true} />
        </div>
      </div>
    </Boundary>
  );
}
