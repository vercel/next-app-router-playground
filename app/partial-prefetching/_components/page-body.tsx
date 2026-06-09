import { Boundary } from '#/ui/boundary';
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
    <SectionCard tone="static" title="Static">
      <SectionValue
        label="Generated at"
        value={data.generatedAt}
        hint="No await, no I/O. Goes straight into the static shell."
      />
    </SectionCard>
  );
}

async function CachedSection({ page }: { page: string }) {
  const data = await getCached(page);
  return (
    <SectionCard tone="cached" title="Cached">
      <SectionValue
        label={`Cache id (${page})`}
        value={`#${data.id}`}
        hint={`Generated at ${data.at} · shared across visitors`}
      />
    </SectionCard>
  );
}

async function PrivateSection({ page }: { page: string }) {
  const data = await getPrivate(page);
  return (
    <SectionCard tone="private" title="Private cache">
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
    <SectionCard tone="uncached" title="Uncached">
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
  intro,
}: {
  page: string;
  linkLabel: string;
  intro: React.ReactNode;
}) {
  return (
    <Boundary label="page.tsx">
      <div className="flex flex-col gap-4">
        <h1 className="font-mono text-xl font-semibold text-gray-200">
          {linkLabel}
        </h1>
        <p className="text-sm text-gray-500">{intro}</p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Suspense fallback={<SectionFallback>Static</SectionFallback>}>
            <StaticSection page={page} />
          </Suspense>
          <Suspense fallback={<SectionFallback>Cached</SectionFallback>}>
            <CachedSection page={page} />
          </Suspense>
          <Suspense
            fallback={<SectionFallback>Private cache</SectionFallback>}
          >
            <PrivateSection page={page} />
          </Suspense>
          <Suspense fallback={<SectionFallback>Uncached</SectionFallback>}>
            <UncachedSection page={page} />
          </Suspense>
        </div>
      </div>
    </Boundary>
  );
}
