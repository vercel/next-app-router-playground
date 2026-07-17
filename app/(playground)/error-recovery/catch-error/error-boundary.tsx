'use client';

import Button from '#/ui/button';
import { Boundary } from '#/ui/boundary';
import { catchError, type ErrorInfo } from 'next/error';
import Link from 'next/link';

function ErrorFallback(
  props: { title: string; backHref: string },
  { error, retry }: ErrorInfo,
) {
  return (
    <Boundary label="catchError fallback" color="red" size="small">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold text-gray-300">{props.title}</h1>
          <p className="text-sm leading-6 text-gray-400">
            {error instanceof Error
              ? error.message
              : 'The report failed to render.'}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button kind="error" onClick={() => retry()}>
            Retry Server Component
          </Button>
          <Link
            href={props.backHref}
            className="rounded-md bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Back
          </Link>
        </div>
      </div>
    </Boundary>
  );
}

export default catchError(ErrorFallback);
