import { ExternalLink } from '#/ui/ExternalLink';

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-gray-500">
        Static-Site Generation
      </div>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            In this example, static rendering is used to pre-render three posts.
            The result of the rendering is stored on a CDN and re-used for each
            request.
          </li>
          <li>Post 1 and 2 are statically pre-rendered at build time.</li>
          <li>
            A random third post is statically rendered on-demand the first time
            it is requested
          </li>
          <li>
            Try navigating to each post and noting the timestamp of when the
            page was rendered.
          </li>
        </ul>
      </div>

      <div>
        <ExternalLink href="https://beta.nextjs.org/docs/data-fetching/fetching#static-data">
          Docs
        </ExternalLink>
      </div>
    </div>
  );
}
