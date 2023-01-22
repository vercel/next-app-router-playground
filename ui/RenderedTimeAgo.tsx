'use client';

import ms from 'ms';
import { useEffect, useRef, useState } from 'react';

// https://github.com/streamich/react-use/blob/master/src/useInterval.ts
const useInterval = (callback: Function, delay?: number | null) => {
  const savedCallback = useRef<Function>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [delay]);
};

export function RenderedTimeAgo({ timestamp }: { timestamp: number }) {
  // TODO: Fix flash of "0s" for SSG:
  // During SSG, Date.now() and `timestamp` are the same. It's only after
  // hydration that the difference is correctly calculated.
  const [msAgo, setMsAgo] = useState<number>(() => {
    return Date.now() - timestamp;
  });

  // update on page change
  useEffect(() => {
    setMsAgo(Date.now() - timestamp);
  }, [timestamp]);

  // update every second
  useInterval(() => {
    setMsAgo(Date.now() - timestamp);
  }, 1000);

  return (
    <div
      className="whitespace-nowrap rounded-full bg-gray-100 px-2 py-0.5 text-sm"
      title={new Date(timestamp).toISOString()}
    >
      <span
        // https://beta.reactjs.org/apis/react-dom/hydrate#avoiding-unavoidable-hydration-mismatches
        suppressHydrationWarning={true}
        className="font-semibold tabular-nums text-gray-900"
      >
        {msAgo >= 1000 ? ms(msAgo) : '0s'}
      </span>{' '}
      <span className="text-gray-600">ago</span>
    </div>
  );
}
