import { PageBody } from '../_components/page-body';

export default function Page() {
  return (
    <PageBody
      page="streaming"
      linkLabel="<Link>"
      intro={
        <>
          The hub link to this page is a default <code>{'<Link>'}</code> (no{' '}
          <code>prefetch</code> prop). The prefetch only includes the App
          Shell. All four sections show their <code>{'<Suspense>'}</code>{' '}
          fallback on click, then stream in.
        </>
      }
    />
  );
}
