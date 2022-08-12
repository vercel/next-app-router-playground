export default function Page() {
  return (
    <div className="space-y-4">
      <div className="text-white">Notes</div>
      <ul className="list-disc space-y-2 pl-4 text-sm text-zinc-300">
        <li>
          This example uses different styling solutions to style each page.
        </li>
        <li>TODO: Discuss</li>
        <ul className="list-disc space-y-2 pl-4 text-sm text-zinc-300">
          <li>`useFlushEffect`</li>
          <li>Client-side requirements</li>
          <li>Challenges posed by streaming and partial rendering</li>
        </ul>
      </ul>
    </div>
  );
}
