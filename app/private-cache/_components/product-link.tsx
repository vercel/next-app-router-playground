'use client';

import { Boundary } from '#/ui/boundary';
import Link from 'next/link';
import { useSyncExternalStore } from 'react';

// DEMO: State tracking for runtime prefetch visualization. This Map and Set
// are used to track prefetch loading states and notify components when the
// state changes, enabling the visual feedback (pink pulsing border while
// prefetching, blue border when complete) shown in this demo.
const loadingState = new Map<string, 'prefetching' | 'prefetched'>();
const subscribers = new Set<() => void>();

function notifySubscribers() {
  subscribers.forEach((callback) => callback());
}

function subscribe(callback: () => void) {
  subscribers.add(callback);
  return () => {
    subscribers.delete(callback);
  };
}

// DEMO: Network observation for visualization purposes only. This code uses
// PerformanceObserver to detect runtime prefetch requests and track their
// loading states, enabling the visual feedback (pink pulsing border while
// prefetching, blue border when complete) shown in this demo.
// DO NOT use this pattern in production apps.
if (typeof window !== 'undefined' && typeof PerformanceObserver !== 'undefined') {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const url = entry.name;

      // Match RSC prefetch requests for private-cache product routes
      if (
        !url.includes('/private-cache/product/') ||
        !url.includes('_rsc=')
      )
        continue;

      // Extract the pathname (before the query string)
      const pathname = new URL(url).pathname;

      if (!loadingState.has(pathname)) {
        loadingState.set(pathname, 'prefetching');
        notifySubscribers();
      }

      // When duration > 0 the request has completed
      if (entry.duration > 0) {
        loadingState.set(pathname, 'prefetched');
        notifySubscribers();
      }
    }
  });

  observer.observe({ type: 'resource', buffered: true });
}

function getSnapshot(pathname: string): 'prefetching' | 'prefetched' | 'idle' {
  return loadingState.get(pathname) ?? 'idle';
}

export default function ProductLink({
  children,
  href,
  privateCache = false,
}: {
  children: React.ReactNode;
  href: string;
  privateCache: boolean;
}) {
  // Extract pathname from href
  const pathname = href.startsWith('/') ? href : new URL(href).pathname;

  // Subscribe to loading state changes
  const state = useSyncExternalStore(
    subscribe,
    () => getSnapshot(pathname),
    () => 'idle',
  );

  // Determine color and label based on loading state
  let color: 'pink' | 'blue' | undefined;
  let label: string;

  if (state === 'prefetching' && privateCache) {
    color = 'pink';
    label = '<Link> (Prefetching Private Cache...)';
  } else if (state === 'prefetched') {
    color = 'blue';
    label = '<Link> (Prefetched Private Cache)';
  } else if (privateCache) {
    label = '<Link> (Private Cache)';
  } else {
    label = `<Link> (No Private Cache)`;
  }

  return (
    <Link href={href}>
      <Boundary
        label={label}
        size="small"
        color={color}
        animateRerendering={false}
        pulse={state === 'prefetching'}
      >
        {children}
      </Boundary>
    </Link>
  );
}
