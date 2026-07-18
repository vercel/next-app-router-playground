import { Boundary } from '#/ui/boundary';
import Button from '#/ui/button';
import { SkeletonText } from '#/ui/skeleton';
import Link from 'next/link';
import { Suspense } from 'react';
import { resetCatchErrorDemoAction } from '../actions';
import { readTransientReport } from '../_lib/unstable-data';
import ErrorBoundary from './error-boundary';

export default function Page() {
  return (
    <Boundary label="catch-error/page.tsx">
      <div className="flex flex-col gap-6">
        <Link
          href="/error-recovery"
          className="text-sm font-medium text-gray-400 hover:text-white"
        >
          Back to error recovery
        </Link>
        <ErrorBoundary
          title="The analytics card crashed"
          backHref="/error-recovery"
        >
          <Suspense fallback={<PanelSkeleton />}>
            <UnstableAnalyticsPanel />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Boundary>
  );
}

async function UnstableAnalyticsPanel() {
  const report = await readTransientReport('catchError');

  return (
    <Boundary
      label="<UnstableAnalyticsPanel>"
      size="small"
      className="flex flex-col gap-4"
    >
      <h1 className="text-xl font-semibold text-gray-300">
        Analytics recovered
      </h1>
      <div className="grid grid-cols-1 gap-3 text-sm text-gray-400 lg:grid-cols-3">
        <Stat label="Boundary" value={report.boundary} />
        <Stat label="Attempt" value={String(report.attempt)} />
        <Stat label="Refreshed" value={report.refreshedAt} />
      </div>
      <form action={resetCatchErrorDemoAction}>
        <Button type="submit">Reset demo</Button>
      </form>
    </Boundary>
  );
}

function PanelSkeleton() {
  return (
    <Boundary label="<UnstableAnalyticsPanel>" size="small">
      <SkeletonText
        count={18}
        seed="error-recovery-component"
        className="text-gray-800"
      />
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
