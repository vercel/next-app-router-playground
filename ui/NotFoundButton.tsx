'use client';
import { notFound } from 'next/navigation';
import Button from '#/ui/Button';
import React from 'react';

export default function BuggyButton() {
  const [clicked, setClicked] = React.useState(false);

  if (clicked) {
    notFound()
  }

  return (
    <Button
      kind="error"
      onClick={() => {
        setClicked(true);
      }}
    >
      触发404
    </Button>
  );
}
