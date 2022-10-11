'use client';

import React from 'react';
import { useServerInsertedHTML } from 'next/dist/client/components/hooks-client';
import { useStyledJsxRegistry } from '@/lib/styling';

export default function StyledJsxRegistry({
  children,
}: {
  children: JSX.Element;
}) {
  const [StyledJsxRegistry, styledJsxFlushEffect] = useStyledJsxRegistry();

  useServerInsertedHTML(() => {
    return (
      <>
        {styledJsxFlushEffect()}
      </>
    );
  });

  // Only include style registry on server side for SSR
  if (typeof window === 'undefined') {
    return (
        <StyledJsxRegistry>{children}</StyledJsxRegistry>

    );
  }

  return children;
}
