export type Demo = {
  slug: string;
  name: string;
  nav_title?: string;
  description: string;
};

type Category = {
  name: string;
  items: Demo[];
};

export const navigation = [
  {
    name: 'Layouts',
    items: [
      {
        slug: 'layouts',
        name: 'Nested Layouts',
        description: 'Create UI that is shared across routes',
      },
      {
        slug: 'route-groups',
        name: 'Route Groups',
        description: 'Organize routes without affecting URL paths',
      },
      {
        slug: 'parallel-routes',
        name: 'Parallel Routes',
        description: 'Render multiple pages in the same layout',
      },
    ],
  },
  {
    name: 'File Conventions',
    items: [
      {
        slug: 'loading',
        name: 'Loading',
        description:
          'Create meaningful Loading UI for specific parts of an app',
      },
      {
        slug: 'error',
        name: 'Error',
        description: 'Create Error UI for specific parts of an app',
      },
      {
        slug: 'not-found',
        name: 'Not Found',
        description: 'Create Not Found UI for specific parts of an app',
      },
    ],
  },
  // {
  //   name: 'Data',
  //   items: [
  //     {
  //       slug: 'fetching',
  //       name: 'Fetching',
  //       description: '...',
  //     },
  //     {
  //       slug: 'updating',
  //       name: 'Updating',
  //       description: '...',
  //     },
  //   ],
  // },
  {
    name: 'Caching',
    items: [
      {
        slug: 'cacheable-routes',
        name: 'Cacheable Route Segments',
        nav_title: 'Cacheable Routes',
        description: 'Cache the rendered output of a route segment',
      },
      {
        slug: 'cacheable-components',
        name: 'Cacheable React Server Components',
        nav_title: 'Cacheable Components',
        description:
          'Cache the rendered output of an individual React Server Component',
      },
      {
        slug: 'cacheable-functions',
        name: 'Cacheable Functions',
        description: 'Cache the computed result of a regular function',
      },
    ],
  },
  {
    name: 'APIs',
    items: [
      {
        slug: 'use-link-status',
        name: 'useLinkStatus',
        description: 'Create inline visual feedback for link interactions',
      },
    ],
  },
  {
    name: 'Misc',
    items: [
      // {
      //   slug: 'patterns',
      //   name: 'Patterns',
      //   description: 'A collection of useful App Router patterns',
      // },
      // {
      //   slug: 'hooks',
      //   name: 'Client Component Hooks',
      //   description: 'Preview the routing hooks available in Client Components',
      // },
      {
        slug: 'context',
        name: 'Client Context',
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
      },
    ],
  },
] as const satisfies Category[];

type DemoSlug = (typeof navigation)[number]['items'][number]['slug'];

export function getDemoMeta(slug: DemoSlug) {
  for (const section of navigation) {
    const demo = section.items.find((demo) => demo.slug === slug);
    if (demo) return demo;
  }
  throw new Error(`Demo with slug "${slug}" not found`);
}
