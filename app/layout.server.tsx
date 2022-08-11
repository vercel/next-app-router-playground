import '@/styles/globals.css';
import React from 'react';
import AddressBar from '@/ui/AddressBar.client';
import Header from '@/ui/Header.client';
import RootStyleRegistry from '@/ui/RootStyleRegistry.client';
import nextPackageJson from 'next/package.json';
import GlobalNav from './GlobalNav.client';
import Footer from '@/ui/Footer.client';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <head>
        <title>Next.js Layouts and Routing Playground</title>
      </head>
      <RootStyleRegistry>
        <body className="overflow-y-scroll bg-zinc-900">
          <div className="grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8">
            <Header />
            <div className="col-start-2">
              <GlobalNav />
            </div>

            <div className="col-start-3 space-y-6">
              <AddressBar />

              <div className="rounded-xl border border-zinc-800 bg-black p-8">
                {children}
              </div>
            </div>

            <Footer
              reactVersion={React.version}
              nextVersion={nextPackageJson.version}
            />
          </div>
        </body>
      </RootStyleRegistry>
    </html>
  );
}
