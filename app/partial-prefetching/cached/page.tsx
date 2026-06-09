import { PageBody } from '../_components/page-body';

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  return (
    <PageBody
      page="cached"
      linkLabel="<Link prefetch={true}>"
      searchParams={searchParams}
      intro={
        <>
          The hub link to this page sets <code>prefetch={'{true}'}</code>.
          The prefetch upgrades to include cached content alongside the App
          Shell — but the <code>{"'use cache'"}</code> section is keyed by{' '}
          <code>?id</code>, so it still has to be resolved at request time
          and will stream in. <code>{"'use cache: private'"}</code> and the
          uncached section also stream.
        </>
      }
    />
  );
}
