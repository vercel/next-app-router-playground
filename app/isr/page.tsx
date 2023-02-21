import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Incremental Static Regeneration
      </h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            In this example, three posts that were statically pre-rendered at
            build time are periodically revalidated every 10 seconds.
          </li>
          <li>
            Try navigating to each post and noting the timestamp of when the
            page was rendered. Refresh the page after 10 seconds to trigger a
            revalidation for the next request. Refresh again to see the
            revalidated page.
          </li>
        </ul>
      </div>

      <div>
        <ExternalLink href="https://beta.nextjs.org/docs/data-fetching/fetching#revalidating-data">
          Docs
        </ExternalLink>
      </div>
    </div>
  );
}
