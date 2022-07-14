import '@/styles/globals.css';
import { AddressBar } from '@/ui/AddressBar.server';
import { Nav } from '@/ui/Nav.server';
import nextPackageJson from 'next/package.json';
import React from 'react';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <head>
        <title>Demo</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-900">
        <div className="grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),minmax(auto,240px),1fr] gap-x-8 py-12">
          <div className="col-start-2">
            <Nav
              items={[
                {
                  name: 'Layouts',
                  href: '/layouts',
                },
                {
                  name: 'Client / Server Components',
                  href: '/component-types/server',
                  disabled: true,
                },
                { name: 'Parallel routes', href: '#', disabled: true },
                { name: 'Intercepting routes', href: '#', disabled: true },
              ]}
            />
          </div>

          <div className="col-start-3 space-y-6">
            <AddressBar path={['demo', 'a', 'b', 'c']} />

            {/* MAIN */}
            <div className="w-full rounded-xl border border-zinc-800 bg-black p-8">
              {children}
            </div>
          </div>

          {/* DEBUG */}
          <div className="col-start-2 col-end-[-2] mt-28">
            <div className="flex space-x-6 text-sm text-gray-400">
              <div>React: {React.version}</div>
              <div>Next: {nextPackageJson.version}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
