import { PageBody } from '../_components/page-body';

// Opt this route into runtime prefetching. Every <Link> to /allow-runtime now
// prefetches a runtime prerender that includes cookies, headers, and search
// params.
//
// In stable, the export name is `prefetch = 'allowRuntime'`. Until then, the
// segment config is `unstable_prefetch = 'force-runtime'`.
export const unstable_prefetch = 'force-runtime';

export default function Page() {
  return (
    <PageBody
      page="allow-runtime"
      intro={
        <>
          The page exports <code>prefetch = &apos;allowRuntime&apos;</code>.
          Every <code>{'<Link>'}</code> to this route prefetches a runtime
          prerender, so the <code>{"'use cache: private'"}</code> section
          resolves with cookies/headers ahead of the click. Static and{' '}
          <code>{"'use cache'"}</code> are also in the prerender; the
          uncached section is the only one that streams after navigation.
        </>
      }
    />
  );
}
