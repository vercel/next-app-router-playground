import { Boundary } from '@/ui/Boundary.server';

const SkeletonCard = () => (
  <div className="space-y-3 rounded-2xl bg-zinc-900/80 p-4">
    <div className="h-14 rounded-lg bg-zinc-700" />
    <div className="h-3 w-3/12 rounded-lg bg-vercel-cyan" />
    <div className="h-3 w-11/12 rounded-lg bg-zinc-700" />
    <div className="h-3 w-8/12 rounded-lg bg-zinc-700" />
  </div>
);

export default function Page() {
  return (
    <Boundary labels={['Styled with Tailwind']}>
      <div className="grid grid-cols-3 gap-6">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </Boundary>
  );
}
