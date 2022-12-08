import { ExternalLink } from '#/ui/ExternalLink';

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">Client Context</h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            This example uses context to share state between Client Components
            that cross the Server/Client Component boundary.
          </li>
          <li>
            Try incrementing the counter and navigating between pages. Note how
            the counter state is shared across the app even though they are
            inside different layouts and pages that are Server Components.
          </li>
        </ul>
      </div>

      <div>
        <ExternalLink href="https://beta.nextjs.org/docs/rendering/server-and-client-components#using-context">
          Docs
        </ExternalLink>
      </div>
    </div>
  );
}
