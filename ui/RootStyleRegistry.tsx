'client'

import React from 'react';
import { useFlushEffects } from 'next/dist/client/components/hooks-client';
import {
  useStyledComponentsRegistry,
  useStyledJsxRegistry,
} from '@/lib/styling';

export default function RootStyleRegistry({
  children,
}: {
  children: JSX.Element;
}) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();
  const [StyledJsxRegistry, styledJsxFlushEffect] = useStyledJsxRegistry();

  useFlushEffects(() => {
    return (
      <>
        {styledJsxFlushEffect()}
        {styledComponentsFlushEffect()}
      </>
    );
  });

  // Only include style registry on server side for SSR
  if (typeof window === 'undefined') {
    return (
      <StyledComponentsRegistry>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </StyledComponentsRegistry>
    );
  }

  return children;
}
