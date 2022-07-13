import { Boundary } from '@/ui/Boundary.server';
import { Counter } from '@/ui/Counter.client';
import { SkeletonCard } from '@/ui/SkeletonCard.server';

export default function Page({ params }: any) {
  return (
    <Boundary>
      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: params.id.length }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
        {/* <div>
        <Counter />
      </div> */}
      </div>
    </Boundary>
  );
}
