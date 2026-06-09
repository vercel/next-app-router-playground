import { PageBody } from '../_components/page-body';

export default function Page() {
  return (
    <PageBody
      page="cached"
      intro={
        <>
          Same structure as <code>/streaming</code>. The hub link to this page
          sets <code>prefetch={'{true}'}</code>, so the prefetch includes the
          cached page content alongside the App Shell. The{' '}
          <code>{"'use cache'"}</code> section paints instantly on click;{' '}
          <code>{"'use cache: private'"}</code> and uncached sections still
          stream.
        </>
      }
    />
  );
}
