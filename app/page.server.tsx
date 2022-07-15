import { playgrounds } from '@/ui/PlaygroundNav.server';
import { SkeletonCard } from '@/ui/SkeletonCard.server';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-10">
      {playgrounds.map((playground) => (
        <Link
          key={playground.href}
          href={playground.href}
          className="group relative block space-y-3"
        >
          <SkeletonCard />
          <div className="text-sm font-medium text-zinc-300 group-hover:text-zinc-50">
            {playground.name}
          </div>
        </Link>
      ))}
    </div>
  );
}