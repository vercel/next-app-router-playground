'use client';

import Button from '#/ui/button';
import { Boundary } from '#/ui/boundary';
import Link from 'next/link';
import React from 'react';

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  React.useEffect(() => {
    console.log('logging route error:', error);
  }, [error]);

  return (
    <Boundary label="error-tsx/error.tsx" color="red">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-gray-300">
            Route segment crashed
          </h1>
          <p className="text-sm leading-6 text-gray-400">{error.message}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button kind="error" onClick={() => retry()}>
            Retry route
          </Button>
          <Link
            href="/error-recovery"
            className="rounded-md bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Back
          </Link>
        </div>
      </div>
    </Boundary>
  );
}
