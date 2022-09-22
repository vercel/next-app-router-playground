import '@/styles/globals.css';
import AddressBar from '@/ui/AddressBar';
import nextPackageJson from 'next/package.json';
import React from 'react';
import GlobalNav from './GlobalNav';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <head>
        <title>Next.js Layouts and Routing Playground</title>
      </head>
        <body className="overflow-y-scroll bg-zinc-900">
          <div className="grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8">
            <div className="col-start-2">
              <GlobalNav />
            </div>

            <div className="col-start-3 space-y-6">
              <AddressBar />

              <div className="rounded-xl border border-zinc-800 bg-black p-8">
                {children}
              </div>
            </div>

            <div className="col-start-3 col-end-4 mt-28 flex items-center justify-between">
              <div className="flex space-x-6 text-sm text-zinc-600">
                <div>React: {React.version}</div>
                <div>Next: {nextPackageJson.version}</div>
              </div>
            </div>
          </div>
        </body>
    </html>
  );
}

