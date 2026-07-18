import { Boundary } from '#/ui/boundary';
import Button from '#/ui/button';
import Link from 'next/link';
import { resetErrorTsxDemoAction } from '../actions';
import { readTransientReport } from '../_lib/unstable-data';

export default async function Page() {
  const report = await readTransientReport('error.tsx');

  return (
    <Boundary label="error-tsx/page.tsx">
      <div className="flex flex-col gap-6">
        <Link
          href="/error-recovery"
          className="text-sm font-medium text-gray-400 hover:text-white"
        >
          Back to error recovery
        </Link>
        <div className="grid grid-cols-1 gap-3 text-sm text-gray-400 lg:grid-cols-3">
          <Stat label="Boundary" value={report.boundary} />
          <Stat label="Attempt" value={String(report.attempt)} />
          <Stat label="Refreshed" value={report.refreshedAt} />
        </div>
        <form action={resetErrorTsxDemoAction}>
          <Button type="submit">Reset demo</Button>
        </form>
      </div>
    </Boundary>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-900 p-4">
      <div className="font-mono text-xs font-semibold tracking-wider text-gray-600 uppercase">
        {label}
      </div>
      <div className="mt-2 text-lg font-semibold text-gray-300">{value}</div>
    </div>
  );
}
