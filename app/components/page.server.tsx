export default function Page() {
  return (
    <div className="space-y-12">
      <div className="text-xl font-medium text-zinc-500">Home</div>

      <div className="space-y-4">
        <div className="text-white">Notes</div>
        <ul className="list-disc space-y-2 pl-4 text-sm text-zinc-300">
          <li>
            This example shows how moving components to Server Components will
            reduce the amount of JavaScript sent to the client.
          </li>
        </ul>
      </div>
    </div>
  );
}
