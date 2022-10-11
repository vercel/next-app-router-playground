import { CategoryNav } from '@/ui/CategoryNav';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <CategoryNav basePath="data-fetching" />

      <div>{children}</div>
    </div>
  );
}
