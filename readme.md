# Next.js App Directory Playground

Next.js introduced the `app/` directory (beta). This is the result of the [Layouts RFC](https://nextjs.org/blog/layouts-rfc) previously published for community feedback. This includes support for:

-   **Layouts:** Easily share UI while preserving state and avoiding re-renders.
-   **Server Components:** Making server-first the default for the most dynamic applications.
-   **Streaming:** Display instant loading states and stream in updates.
-   **Suspense for Data Fetching:** `async`/`await` support and the `use` hook for component-level fetching.

The `app/` directory can coexist with the existing `pages` directory for incremental adoption. While you **don't need to use the `app/` directory** when upgrading to Next.js 13, we're laying the foundations to build complex interfaces while shipping less JavaScript.

## Running Locally

1. Install dependencies: `yarn`
1. Start the dev server: `yarn dev`

## Documentation

https://beta.nextjs.org/docs

## Leave Feedback

https://github.com/vercel/next.js/discussions/41745
