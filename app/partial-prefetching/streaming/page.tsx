import { Boundary } from '#/ui/boundary';
import { Suspense } from 'react';
import {
  getStatic,
  getCached,
  getPrivate,
  getUncached,
} from '../_components/data';
import {
  SectionCard,
  SectionFallback,
  SectionValue,
} from '../_components/section-card';

const PAGE = 'streaming';

async function StaticSection() {
  const data = getStatic(PAGE);
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

async function CachedSection() {
  const data = await getCached(PAGE);
  return (
    <SectionCard tone="cached" title="Cached">
      <SectionValue
        label={`Cache id (${PAGE})`}
        value={`#${data.id}`}
        hint={`Generated at ${data.at} · shared across visitors`}
      />
    </SectionCard>
  );
}

async function PrivateSection() {
  const data = await getPrivate(PAGE);
  return (
    <SectionCard tone="private" title="Private cache">
      <SectionValue
        label={`Session (${PAGE})`}
        value={data.session}
        hint={`Generated at ${data.at} · per-user, cached in the browser`}
      />
    </SectionCard>
  );
}

async function UncachedSection() {
  const data = await getUncached(PAGE);
  return (
    <SectionCard tone="uncached" title="Uncached">
      <SectionValue
        label={`Live (${PAGE})`}
        value={`#${data.value}`}
        hint={`Generated at ${data.at} · fresh on every request`}
      />
    </SectionCard>
  );
}

export default function Page() {
  return (
    <Boundary label="page.tsx">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-gray-300">/streaming</h1>
        <p className="text-sm text-gray-500">
          The base page. No page-level <code>{"'use cache'"}</code>, no{' '}
          <code>prefetch</code> segment config. Each data type lives in its
          own <code>{'<Suspense>'}</code> boundary. The shell paints
          instantly; cards stream in as they resolve.
        </p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Suspense
            fallback={<SectionFallback>Static</SectionFallback>}
          >
            <StaticSection />
          </Suspense>
          <Suspense
            fallback={<SectionFallback>Cached</SectionFallback>}
          >
            <CachedSection />
          </Suspense>
          <Suspense
            fallback={<SectionFallback>Private cache</SectionFallback>}
          >
            <PrivateSection />
          </Suspense>
          <Suspense
            fallback={<SectionFallback>Uncached</SectionFallback>}
          >
            <UncachedSection />
          </Suspense>
        </div>
      </div>
    </Boundary>
  );
}
