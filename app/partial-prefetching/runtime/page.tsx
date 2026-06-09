import { Boundary } from '#/ui/boundary';
import { cookies } from 'next/headers';
import { Suspense } from 'react';

// Opt this route into runtime prefetching. Every <Link> to /runtime now
// prefetches a runtime prerender that includes cookies, headers, and
// search params.
export const unstable_prefetch = 'force-runtime';

async function getSessionAwareData() {
  const cookieJar = await cookies();
  const session = cookieJar.get('session')?.value ?? 'anonymous';
  console.log('[partial-prefetching/runtime] RUNTIME RAN at', new Date().toISOString(), 'session:', session);
  return { session, at: new Date().toISOString() };
}

async function RuntimeSection() {
  const data = await getSessionAwareData();
  return (
    <p className="font-mono text-sm text-gray-300">
      Session: {data.session} (at {data.at})
    </p>
  );
}

export default function Page() {
  return (
    <Boundary label="page.tsx (unstable_prefetch = 'force-runtime')">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-gray-300">/runtime</h1>
        <p className="text-sm text-gray-500">
          The body reads cookies inside a <code>{'<Suspense>'}</code>{' '}
          boundary. Because the route exports{' '}
          <code>unstable_prefetch = &apos;force-runtime&apos;</code>, the
          prefetch resolves the cookie read on the server, ahead of the click.
        </p>
        <Suspense fallback={<p className="text-sm text-gray-500">Loading…</p>}>
          <RuntimeSection />
        </Suspense>
      </div>
    </Boundary>
  );
}
