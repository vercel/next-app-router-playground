import { Boundary } from '@/ui/Boundary.server';
import React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return <Boundary>{children}</Boundary>;
}
