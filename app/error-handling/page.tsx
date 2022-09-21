import BuggyButton from '@/ui/BuggyButton';

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between space-x-3">
        <div className="text-xl font-medium text-zinc-500">
          <div className="text-xl font-medium text-zinc-500">Home</div>
        </div>

        <BuggyButton />
      </div>

      <div>
        <div className="text-white">Notes</div>

        <ul className="list-disc space-y-2 pl-4 text-sm text-zinc-300">
          <li>
            Error boundaries don't yet work in development because Next.js
            native error overlay needs to be reworked.
          </li>
        </ul>
      </div>
    </div>
  );
}
