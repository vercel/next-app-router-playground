export default function Page() {
  return (
    <div className="space-y-9">
      <div className="text-xl font-medium text-zinc-500">Home</div>

      <div className="space-y-4">
        <div className="text-white">Notes</div>
        <ul className="list-disc space-y-2 pl-4 text-sm text-zinc-300">
          <li>
            This example uses{' '}
            <span className="font-medium text-white">Route Groups</span> to
            create layouts for different sections of the app without affecting
            the URL structure.
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
    </div>
  );
}
