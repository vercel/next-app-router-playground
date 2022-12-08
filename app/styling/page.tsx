import { ExternalLink } from '#/ui/ExternalLink';

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">Styling</h1>

      <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
        <li>This example shows different styling solutions.</li>
      </ul>

      <div>
        <ExternalLink href="https://beta.nextjs.org/docs/styling/css-modules">
          Docs
        </ExternalLink>
      </div>
    </div>
  );
}
