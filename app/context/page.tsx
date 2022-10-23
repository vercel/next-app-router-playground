export default function Page() {
  return (
    <div className="space-y-12">
      <div className="text-xl font-medium text-zinc-500">Home</div>

      <div className="space-y-4">
        <div className="text-white">Notes</div>
        <ul className="list-disc space-y-2 pl-4 text-sm text-zinc-300">
          <li>
            Pass context between Client Components that cross Server/Client
            Component boundary
          </li>
          <li>
            Click the counter and navigate between pages. Because the context
            provider is above the nested layouts and pages the number of clicks
            remains constant even between navigations.
          </li>
        </ul>
      </div>
    </div>
  );
}
