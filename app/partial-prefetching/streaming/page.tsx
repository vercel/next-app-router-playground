import { PageBody } from '../_components/page-body';

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  return (
    <PageBody
      page="streaming"
      linkLabel="<Link>"
      searchParams={searchParams}
      intro={
        <>
          The hub link to this page is a default <code>{'<Link>'}</code> (no{' '}
          <code>prefetch</code> prop). The prefetch only includes the App
          Shell. The <code>{"'use cache'"}</code> section is keyed by{' '}
          <code>?id</code>, so it can&apos;t be in the shell either — all
          four sections show their <code>{'<Suspense>'}</code> fallback on
          click, then stream in.
        </>
      }
    />
  );
}
