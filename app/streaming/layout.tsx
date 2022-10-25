import ClickCounter from '@/ui/ClickCounter';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div>{children}</div>
    </div>
  );
}
