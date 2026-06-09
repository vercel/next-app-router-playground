import { Boundary } from '#/ui/boundary';

async function getCachedData() {
  'use cache';
  // Marker so you can see in server logs whether this ran during prefetch.
  console.log('[partial-prefetching/cached] CACHED RAN at', new Date().toISOString());
  return { id: Math.floor(Math.random() * 1_000_000), at: new Date().toISOString() };
}

export default async function Page() {
  const data = await getCachedData();
  return (
    <Boundary label="page.tsx (use cache)">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-gray-300">/cached</h1>
        <p className="text-sm text-gray-500">
          The whole component is wrapped in <code>&apos;use cache&apos;</code>.
          The value below is generated once per cache lifetime and reused for
          every visitor.
        </p>
        <p className="font-mono text-sm text-gray-300">
          Cached value: {data.id} (at {data.at})
        </p>
      </div>
    </Boundary>
  );
}
