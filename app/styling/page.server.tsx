export default function Page() {
  return (
    <div className="space-y-4">
      <div className="text-white">Notes</div>

      <ul className="list-disc space-y-2 pl-4 text-sm text-zinc-300">
        <li>
          Supporting CSS-in-JS (Styled Components and Styled JSX) is a
          three-step opt-in process that involves:
        </li>
        <ul className="list-disc space-y-2 pl-4 text-sm text-zinc-300">
          <li>
            Creating a "style registry" to collect all CSS rules in a render.
          </li>
          <li>
            Using the new `useFlushEffects` hook to inject rules before any
            content that might use them.
          </li>
          <li>
            Creating a client component that wraps your app with the style
            registry during initial server-side rendering.
          </li>
        </ul>
      </ul>
    </div>
  );
}
