import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">
        Shared server-side UI that depends on URL information
      </h1>

      <ul>
        <li>
          Typically, when you have shared UI, you'd put it inside a layout.
          However, layouts do not receive <code>searchParams</code> and{' '}
          <code>params</code> lower than their segment. This is a challenge for
          shared UI like breadcrumbs that depends on the URL information.
        </li>
        <li>
          For simple cases, you can move the UI to Client Components and use
          router hooks such as <code>usePathname</code> and{' '}
          <code>useSearchParams</code>.
        </li>
        <li>
          This example shows how to use Parallel Routes and a{' '}
          <code>page.js</code> in a catch all route to have pockets of shared UI
          across your app.
        </li>
        <li>
          Try navigating between categories and sub categories. Notice the
          breadcrumbs can derive URL information.
        </li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/patterns/breadcrumbs">
          Code
        </ExternalLink>
      </div>
    </div>
  );
}
