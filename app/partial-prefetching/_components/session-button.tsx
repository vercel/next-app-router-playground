'use client';

import { changeSessionAction } from '#/app/private-cache/actions';
import Button from '#/ui/button';
import { useState, useTransition } from 'react';

export default function SessionButton() {
  const [isPending, startTransition] = useTransition();
  const [changed, setChanged] = useState(false);

  return (
    <Button
      kind="default"
      onClick={() => {
        startTransition(async () => {
          await changeSessionAction();
          setChanged(true);
          setTimeout(() => setChanged(false), 2000);
        });
      }}
      disabled={isPending}
    >
      {isPending
        ? 'Changing session…'
        : changed
          ? 'Session changed'
          : 'Change session'}
    </Button>
  );
}
