import { PageBody } from '../_components/page-body';

// Opt this route into runtime prefetching. Every <Link> to /allow-runtime
// prefetches a runtime prerender that includes cookies, headers, and search
// params.
//
// Stable: `prefetch = 'allow-runtime'`. Until then: `unstable_prefetch = 'force-runtime'`.
export const unstable_prefetch = 'force-runtime';

export default function Page() {
  return (
    <PageBody
      page="allow-runtime"
      linkLabel="<Link prefetch={true}>"
      routeConfig="prefetch = 'allow-runtime'"
      intro={
        <>
          The page exports <code>prefetch = &apos;allow-runtime&apos;</code>,
          so a <code>{'<Link prefetch={true}>'}</code> to it prefetches a
          runtime prerender. The <code>{"'use cache: private'"}</code>{' '}
          section resolves with cookies/headers ahead of the click. Static
          and <code>{"'use cache'"}</code> are also in the prerender; the
          uncached section is the only one that streams after navigation.
        </>
      }
    />
  );
}
