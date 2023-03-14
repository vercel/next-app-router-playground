'use server';

import { Suspense } from 'react';

const hideSuccessors = `*:has(.linearStreamSentitel) ~ *, .linearStreamSentitel ~ *, .linearStreamSentitel {
  display: none
}`;

/**
 * Streams like in PHP: The component's children and all successors are hidden while we are
 * waiting for the children to finish loading.
 */
export async function LinearStream({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <>
          <style dangerouslySetInnerHTML={{ __html: hideSuccessors }}></style>
          <div className="linearStreamSentitel" />
        </>
      }
    >
      {children}
    </Suspense>
  );
}
