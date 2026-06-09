import { Boundary } from '#/ui/boundary';
import { connection } from 'next/server';
import { Suspense } from 'react';

async function getUncachedData() {
  await connection();
  console.log('[partial-prefetching/streaming] UNCACHED RAN at', new Date().toISOString());
  return { id: Math.floor(Math.random() * 1_000_000), at: new Date().toISOString() };
}

async function UncachedSection() {
  const data = await getUncachedData();
  return (
    <p className="font-mono text-sm text-gray-300">
      Uncached value: {data.id} (at {data.at})
    </p>
  );
}

export default function Page() {
  return (
    <Boundary label="page.tsx">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-gray-300">/streaming</h1>
        <p className="text-sm text-gray-500">
          The body reads an uncached value wrapped in{' '}
          <code>{'<Suspense>'}</code>. The fallback is part of the static
          shell. The uncached value streams in after the navigation.
        </p>
        <Suspense fallback={<p className="text-sm text-gray-500">Loading…</p>}>
          <UncachedSection />
        </Suspense>
      </div>
    </Boundary>
  );
}
