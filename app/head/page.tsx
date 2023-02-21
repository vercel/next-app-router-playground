import { ExternalLink } from '#/ui/external-link';
import { HeadInfo } from './head-info';

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium text-gray-400/80">
        Configuring the Head Tag
      </h1>

      <HeadInfo />

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            Use `head.js` to configure the &#x3c;head&#x3e; tag of a route
            segment.
          </li>
          <li>
            You can fetch data inside `head.js` to create dynamic titles and
            meta tags.
          </li>
          <li>
            Next will dedupe requests for the same data across `layout.js`,
            `page.js` and `head.js` when rendering a route.
          </li>
          <li>
            Next will wait for any data fetching inside `head.js` to complete
            before streaming any UI to the client. This guarantuees the first
            part of a streamed response includes head tags.
          </li>
        </ul>
      </div>

      <div>
        <ExternalLink href="https://beta.nextjs.org/docs/api-reference/file-conventions/head">
          Docs
        </ExternalLink>
      </div>
    </div>
  );
}
