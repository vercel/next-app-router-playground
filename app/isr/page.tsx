import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Incremental Static Regeneration</h1>

      <ul>
        <li>
          In this example, three posts that were statically pre-rendered at
          build time are periodically revalidated every 10 seconds.
        </li>
        <li>
          Try navigating to each post and noting the timestamp of when the page
          was rendered. Refresh the page after 10 seconds to trigger a
          revalidation for the next request. Refresh again to see the
          revalidated page.
        </li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://beta.nextjs.org/docs/data-fetching/fetching#revalidating-data">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/isr">
          Code
        </ExternalLink>
      </div>
    </div>
  );
}
