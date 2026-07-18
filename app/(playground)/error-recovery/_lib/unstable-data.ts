import 'server-only';

import { connection } from 'next/server';

const attempts = new Map<string, number>();

export type BoundaryKind = 'catchError' | 'error.tsx';

export async function readTransientReport(boundary: BoundaryKind) {
  await connection();
  await new Promise((resolve) => setTimeout(resolve, 700));

  const previousAttempts = attempts.get(boundary) ?? 0;
  const nextAttempt = previousAttempts + 1;
  attempts.set(boundary, nextAttempt);

  if (previousAttempts === 0) {
    throw new Error(`${boundary} report failed on attempt ${nextAttempt}`);
  }

  return {
    boundary,
    attempt: nextAttempt,
    refreshedAt: new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }),
  };
}

export function resetTransientReport(boundary: BoundaryKind) {
  attempts.delete(boundary);
}
