import { PageBody } from '../_components/page-body';

export default function Page() {
  return (
    <PageBody
      page="streaming"
      intro={
        <>
          The base page. No page-level <code>{"'use cache'"}</code>, no{' '}
          <code>prefetch</code> segment config. Each section lives in its own{' '}
          <code>{'<Suspense>'}</code> boundary. With a default{' '}
          <code>{'<Link>'}</code>, the prefetch only includes the App Shell:
          all four fallbacks show on click, then each section streams in.
        </>
      }
    />
  );
}
