'use client';

import { Boundary } from '#/ui/boundary';
import Link from 'next/link';

export default function ProductLink({
  children,
  href,
  privateCache = false,
}: {
  children: React.ReactNode;
  href: string;
  privateCache: boolean;
}) {
  return (
    <Link href={href} prefetch={privateCache ? true : undefined}>
      <Boundary
        label={
          privateCache ? '<Link> (Private Cache)' : '<Link> (No Private Cache)'
        }
        size="small"
        color={privateCache ? 'blue' : undefined}
        animateRerendering={false}
      >
        {children}
      </Boundary>
    </Link>
  );
}
