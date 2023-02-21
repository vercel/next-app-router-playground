import BuggyButton from '#/ui/buggy-button';
import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between gap-x-3">
        <h1 className="text-xl font-medium text-gray-400/80">Error Handling</h1>

        <BuggyButton />
      </div>

      <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
        <li>
          `error.js` defines the error boundary for a route segment and the
          children below it. It can be used to show specific error information,
          and functionality to attempt to recover from the error.
        </li>
        <li>
          Trying navigation pages and triggering an error inside nested layouts.
          Notice how the error is isolated to that segment, while the rest of
          the app remains interactive.
        </li>
        <li>Note: Error boundaries don't yet work in development.</li>
      </ul>

      <div>
        <ExternalLink href="https://beta.nextjs.org/docs/routing/error-handling">
          Docs
        </ExternalLink>
      </div>
    </div>
  );
}
