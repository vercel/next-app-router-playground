import { ExternalLink } from '#/ui/ExternalLink';

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Instant Loading States
      </h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            This example has an artificial delay when &quot;fetching&quot; data
            for each category page. `loading.js` is used to show a loading
            skeleton immediately while data for category page loads before being
            streamed in.
          </li>
          <li>
            Shared layouts remain interactive while nested layouts or pages
            load. Try clicking the counter while the children load.
          </li>
          <li>
            Navigation is interruptible. Try navigating to one category, then
            clicking a second category before the first one has loaded.
          </li>
        </ul>
      </div>

      <div>
        <ExternalLink href="https://beta.nextjs.org/docs/routing/loading-ui">
          Docs
        </ExternalLink>
      </div>
    </div>
  );
}
