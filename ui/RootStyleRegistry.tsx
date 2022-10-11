'use client';

import React from 'react';
import { useServerInsertedHTML } from 'next/dist/client/components/hooks-client';
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

  useServerInsertedHTML(() => {
    return (
      <>
        {styledJsxFlushEffect()}
        {styledComponentsFlushEffect()}
      </>
    );
  });

  return (
    <StyledComponentsRegistry>
      <StyledJsxRegistry>{children}</StyledJsxRegistry>
    </StyledComponentsRegistry>
  );
}
