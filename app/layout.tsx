import '@/styles/globals.css';
import AddressBar from '@/ui/AddressBar';
import GlobalNav from './GlobalNav';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <head>
        <title>Next.js App Directory Playground</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-900">
        <div className="grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8">
          <div className="col-start-2">
            <GlobalNav />
          </div>

          <div className="col-start-3 space-y-6">
            <AddressBar />

            <div className="p-8 bg-black border rounded-xl border-zinc-800">
              {children}
            </div>
          </div>

          <div className="flex items-center justify-center col-start-3 col-end-4 mt-28">
            <div className="text-sm text-zinc-600">
              Created by the <b>Next.js</b>
              {' team at '}
              <a href="https://vercel.com">
                <b>Vercel</b>
              </a>
              {'. '}
              <a
                className="underline decoration-dotted underline-offset-4"
                href="https://github.com/vercel/next.js/examples/app-playground"
              >
                View the code
              </a>
              {' or '}
              <a
                className="underline decoration-dotted underline-offset-4"
                href="https://vercel.com/templates/next.js"
              >
                deploy your own
              </a>
              {'.'}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
