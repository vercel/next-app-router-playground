'use client';

import { useLinkStatus } from 'next/link';

export function LinkStatus() {
  const { pending } = useLinkStatus();
  return pending ? (
    <div
      role="status"
      aria-label="Loading"
      className="spinner ml-auto size-4 shrink-0 rounded-full"
    />
  ) : null;
}
