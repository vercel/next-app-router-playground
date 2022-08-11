import React from 'react';
import StylingNav from './StylingNav.client';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <StylingNav />
      <div className="flex items-center justify-between">{children}</div>
    </div>
  );
}
