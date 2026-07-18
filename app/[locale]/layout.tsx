import '#/styles/globals.css';

import db from '#/lib/db';
import Byline from '#/ui/byline';
import { GlobalNav } from '#/ui/global-nav';
import { locale } from 'next/root-params';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentLocale = await locale();
  const demos = db.demo.findMany();

  return (
    <html lang={currentLocale} className="[color-scheme:dark]">
      <body
        className={`overflow-y-scroll bg-gray-950 font-sans ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-r lg:border-b-0 lg:border-gray-800">
          <GlobalNav items={demos} />
        </div>

        <div className="lg:pl-72">
          <div className="mx-auto mt-12 mb-24 max-w-4xl -space-y-[1px] lg:px-8 lg:py-8">
            {children}

            <Byline />
          </div>
        </div>
      </body>
    </html>
  );
}
