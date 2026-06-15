import { Boundary } from '#/ui/boundary';
import { ProductCard } from '#/ui/product-card';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Suspense } from 'react';
import { listProducts } from './_components/data';
import SessionButton from './_components/session-button';
import { SessionBadge } from './_components/session-badge';

// The hub picks a single featured product so the three entry points
// below all point at the same id. The only thing that changes between
// them is the link style and what the destination route prefetches.
const FEATURED_ID = '1';

export default function Page() {
  const featured = listProducts().find((p) => p.id === FEATURED_ID)!;

  return (
    <Boundary label="page.tsx (statically inferred)" animateRerendering={false}>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-300">
            Today&rsquo;s pick
          </h1>
          <div className="flex items-center gap-3">
            <Suspense fallback={null}>
              <SessionBadge />
            </Suspense>
            <SessionButton />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* 1. Bare <Link>. Only the App Shell is prefetched; every
              section on the destination streams after the click. */}
          <EntryCard
            href={`/partial-prefetching/live/${featured.id}`}
            kicker="Shell only"
            sub="<Link>"
            note="App Shell only. All three sections stream in on click."
          >
            <ProductCard product={featured} />
          </EntryCard>

          {/* 2. <Link prefetch={true}>. Destination has no extra prefetch
              config, so 'use cache' (keyed by id) comes down in the
              prefetch but 'use cache: private' (cookies) does not. */}
          <EntryCard
            href={`/partial-prefetching/details/${featured.id}`}
            prefetch
            kicker="Prefetched"
            sub="<Link prefetch={true}>"
            note="Hero ('use cache') is in the prefetch. Stock and recommendations stream."
          >
            <ProductCard product={featured} animateEnter={true} />
          </EntryCard>

          {/* 3. <Link prefetch={true}> to a route that exports
              prefetch = 'allow-runtime'. Now 'use cache: private' (which
              reads the session cookie) is also in the prefetch. Only
              the uncached <Stock> streams. */}
          <EntryCard
            href={`/partial-prefetching/for-you/${featured.id}`}
            prefetch
            kicker="Runtime prefetched"
            sub="<Link prefetch={true}> + prefetch = 'allow-runtime'"
            note="Hero and recommendations are in the prefetch. Only stock streams."
          >
            <ProductCard product={featured} />
          </EntryCard>
        </div>
      </div>
    </Boundary>
  );
}

function EntryCard({
  href,
  prefetch,
  kicker,
  sub,
  note,
  children,
}: {
  href: string;
  prefetch?: boolean;
  kicker: string;
  sub: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} prefetch={prefetch} className="group block">
      <div className="flex flex-col gap-3 rounded-md border border-gray-800 p-4 transition group-hover:border-gray-600">
        {children}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 text-base font-medium text-gray-200 group-hover:text-gray-100">
            {kicker}
            <ChevronRightIcon className="size-4 text-gray-500 transition group-hover:translate-x-0.5 group-hover:text-gray-300" />
          </div>
          <code className="font-mono text-[11px] text-gray-500">{sub}</code>
          <p className="text-xs text-gray-500">{note}</p>
        </div>
      </div>
    </Link>
  );
}
