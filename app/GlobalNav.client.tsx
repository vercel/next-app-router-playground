import { playgrounds } from '@/lib/playgrounds';
import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/dist/client/components/hooks-client';
import Link from 'next/link';

export default function GlobalNav() {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  return (
    <div className="space-y-1">
      <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
        Demos
      </h3>
      <div className="space-y-1">
        {playgrounds.map((item) => {
          const isActive = item.slug === selectedLayoutSegment;

          return (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className={clsx(
                'group flex items-center rounded-md px-3 py-2 text-sm font-medium  hover:bg-zinc-800 hover:text-zinc-100',
                { 'text-zinc-400': !isActive, 'text-white': isActive },
              )}
            >
              <span className="truncate">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
