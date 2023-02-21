import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">Route Groups</h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            This example uses Route Groups to create layouts for different
            sections of the app without affecting the URL structure.
          </li>
          <li>
            Try navigating pages and noting the different layouts used for each
            section.
          </li>
          <li>Route groups can be used to:</li>
          <ul className="list-disc space-y-2 pl-4">
            <li>Opt a route segment out of a shared layout.</li>
            <li>Organize routes without affecting the URL structure.</li>
            <li>
              Create multiple root layouts by partitioning the top level of the
              application.
            </li>
          </ul>
        </ul>
      </div>

      <div>
        <ExternalLink href="https://beta.nextjs.org/docs/routing/defining-routes#route-groups">
          Docs
        </ExternalLink>
      </div>
    </div>
  );
}
