import { PageBody } from '../_components/page-body';

export default function Page() {
  return (
    <PageBody
      page="cached"
      linkLabel="<Link prefetch={true}>"
      intro={
        <>
          The hub link to this page sets <code>prefetch={'{true}'}</code>. The
          prefetch includes the cached page content alongside the App Shell.
          The <code>{"'use cache'"}</code> section paints instantly on click;{' '}
          <code>{"'use cache: private'"}</code> and the uncached section still
          stream.
        </>
      }
    />
  );
}
