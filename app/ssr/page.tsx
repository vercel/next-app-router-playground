import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Server-side rendering
      </h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            With server-side rendering, the HTML of the page is generated on a
            server for each request. The generated HTML, JSON data, and
            JavaScript instructions to make the page interactive are then sent
            to the client.
          </li>
          <li>
            On the client, the HTML is used to show a fast non-interactive page,
            while React uses the JSON data and JavaScript instructions to make
            components interactive (for example, attaching event handlers to a
            button). This process is called hydration.
          </li>
        </ul>
      </div>

      <div>
        <ExternalLink href="https://beta.nextjs.org/docs/data-fetching/fetching#dynamic-data">
          Docs
        </ExternalLink>
      </div>
    </div>
  );
}
