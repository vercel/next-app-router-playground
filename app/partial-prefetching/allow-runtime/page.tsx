import { PageBody } from '../_components/page-body';

// Opt this route into runtime prefetching. Every <Link> to /allow-runtime
// prefetches a runtime prerender that includes cookies, headers, and search
// params.
//
// Stable: `prefetch = 'allow-runtime'`. Until then: `unstable_prefetch = 'force-runtime'`.
export const unstable_prefetch = 'force-runtime';

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  return (
    <PageBody
      page="allow-runtime"
      linkLabel="<Link prefetch={true}>"
      routeConfig="prefetch = 'allow-runtime'"
      searchParams={searchParams}
      intro={
        <>
          The page exports <code>prefetch = &apos;allow-runtime&apos;</code>,
          so a <code>{'<Link prefetch={true}>'}</code> to it prefetches a
          runtime prerender. <code>?id</code> is resolved on the server ahead
          of the click, so the <code>{"'use cache'"}</code> section is in the
          prerender too. <code>{"'use cache: private'"}</code> reads cookies
          and is also included. Only the uncached section streams after
          navigation.
        </>
      }
    />
  );
}
