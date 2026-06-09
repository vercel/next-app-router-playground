import { PageBody } from '../_components/page-body';

// Opt this route into runtime prefetching. With cacheComponents enabled,
// `unstable_prefetch = 'force-runtime'` makes every prefetch for this route
// fetch a runtime prerender — cookies, headers, and searchParams are
// resolved on the server ahead of the click.
export const unstable_prefetch = 'force-runtime';

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  return (
    <PageBody
      page="force-runtime"
      linkLabel="<Link prefetch={true}>"
      routeConfig="unstable_prefetch = 'force-runtime'"
      searchParams={searchParams}
      intro={
        <>
          The page exports{' '}
          <code>unstable_prefetch = &apos;force-runtime&apos;</code>, so a{' '}
          <code>{'<Link prefetch={true}>'}</code> to it prefetches a runtime
          prerender. <code>?id</code> is resolved on the server ahead of the
          click, so the <code>{"'use cache'"}</code> section is in the
          prerender too. <code>{"'use cache: private'"}</code> reads cookies
          and is also included. Only the uncached section streams after
          navigation.
        </>
      }
    />
  );
}
