import React from 'react';
import CategoryNav from './CategoryNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <CategoryNav />

      <div>{children}</div>
    </div>
  );
}
