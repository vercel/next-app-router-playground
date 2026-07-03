import { ThemeProvider } from '#/ui/theme-provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const demos = db.demo.findMany();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          } catch (_) {}
        `}} />
      </head>
      <body className={`overflow-y-scroll bg-background text-foreground transition-colors duration-200 font-sans ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className="fixed top-0 z-10 flex w-full flex-col border-b border-border bg-background lg:bottom-0 lg:z-auto lg:w-72 lg:border-r lg:border-b-0">
            <GlobalNav items={demos} />
          </div>

          <div className="lg:pl-72">
            <div className="mx-auto mt-12 mb-24 max-w-4xl -space-y-[1px] lg:px-8 lg:py-8">
              {children}
              <Byline />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
