import { Boundary } from '#/ui/boundary';
import Link from 'next/link';
import { Suspense } from 'react';
import {
  getStatic,
  getCached,
  getPrivate,
  getUncached,
} from './data';
import {
  SectionCard,
  SectionFallback,
  SectionValue,
} from './section-card';

async function StaticSection({ page }: { page: string }) {
  const data = getStatic(page);
  return (
    <SectionCard tone="static">
      <SectionValue
        label="Generated at"
        value={data.generatedAt}
        hint="No await, no I/O. Goes straight into the static shell."
      />
    </SectionCard>
  );
}

async function CachedSection({
  page,
  searchParams,
}: {
  page: string;
  searchParams: Promise<{ id?: string }>;
}) {
  const { id = '1' } = await searchParams;
  const data = await getCached(page, id);
  return (
    <SectionCard tone="cached">
      <SectionValue
        label={`Cache id=${data.id}`}
        value={`#${data.value}`}
        hint={`Generated at ${data.at} · keyed by ?id=${data.id}`}
      />
    </SectionCard>
  );
}

async function PrivateSection({ page }: { page: string }) {
  const data = await getPrivate(page);
  return (
    <SectionCard tone="private">
      <SectionValue
        label={`Session (${page})`}
        value={data.session}
        hint={`Generated at ${data.at} · per-user, cached in the browser`}
      />
    </SectionCard>
  );
}

async function UncachedSection({ page }: { page: string }) {
  const data = await getUncached(page);
  return (
    <SectionCard tone="uncached">
      <SectionValue
        label={`Live (${page})`}
        value={`#${data.value}`}
        hint={`Generated at ${data.at} · fresh on every request`}
      />
    </SectionCard>
  );
}

export function PageBody({
  page,
  linkLabel,
  routeConfig,
  intro,
  searchParams,
}: {
  page: string;
  linkLabel: string;
  routeConfig?: string;
  intro: React.ReactNode;
  searchParams: Promise<{ id?: string }>;
}) {
  return (
    <Boundary label="page.tsx">
      <div className="flex flex-col gap-4">
        <Link
          href="/partial-prefetching"
          className="text-sm text-gray-500 hover:text-gray-300"
        >
          ← Back
        </Link>
        <div className="flex flex-col gap-1">
          <h1 className="font-mono text-xl font-semibold text-gray-200">
            {linkLabel}
          </h1>
          {routeConfig ? (
            <p className="font-mono text-xs text-gray-500">
              route exports <span className="text-gray-300">{routeConfig}</span>
            </p>
          ) : null}
        </div>
        <p className="text-sm text-gray-500">{intro}</p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Suspense fallback={<SectionFallback tone="static" />}>
            <StaticSection page={page} />
          </Suspense>
          <Suspense fallback={<SectionFallback tone="cached" />}>
            <CachedSection page={page} searchParams={searchParams} />
          </Suspense>
          <Suspense fallback={<SectionFallback tone="private" />}>
            <PrivateSection page={page} />
          </Suspense>
          <Suspense fallback={<SectionFallback tone="uncached" />}>
            <UncachedSection page={page} />
          </Suspense>
        </div>
      </div>
    </Boundary>
  );
}
