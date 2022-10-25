import { ReactNode } from 'react';
import DataNav from './DataNav';

export default function Layout({ children }: { children: ReactNode }) {
  const ids = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];
  if (!ids) return null;

  return (
    <div className="space-y-9">
      <div className="flex items-center justify-between">
        <DataNav ids={ids} />
        <div className="rounded-lg bg-zinc-700 px-3 py-1 text-sm font-medium tabular-nums text-zinc-100">
          Last Rendered: {new Date('10/25/2022 11:05:20').toLocaleTimeString()}
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
