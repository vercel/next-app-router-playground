type Item = {
  name: string;
  items: {
    name: string;
    slug: string;
    description?: string;
    isDisabled?: boolean;
  }[];
};

export const demos: Item[] = [
  {
    name: 'Layouts',
    items: [
      {
        name: 'Nested Layouts',
        slug: 'layouts',
        description: 'Create UI that is shared across routes',
      },
      {
        name: 'Grouped Layouts',
        slug: 'route-groups',
        description: 'Organize routes without affecting URL paths',
      },
      // TODO: Re-add this page once streaming example been updated.
      // {
      //   name: 'Streaming with Suspense',
      //   slug: 'streaming',
      //   description:
      //     'Streaming data fetching from the server with React Suspense',
      // },
      {
        name: 'Root Layouts',
        slug: 'root-layouts',
        description: 'Create top-level layouts that apply to all routes',
        isDisabled: true,
      },
    ],
  },
  {
    name: 'File Conventions',
    items: [
      {
        name: 'Loading',
        slug: 'loading',
        description:
          'Create meaningful loading UI for specific parts of an app',
      },
      {
        name: 'Error',
        slug: 'error-handling',
        description: 'Create error UI for specific parts of an app',
      },
    ],
  },
  {
    name: 'Data Fetching',
    items: [
      {
        name: 'Static-Site Generation',
        slug: 'ssg',
        description: 'Generate static pages',
      },
      {
        name: 'Server-Side Rendering',
        slug: 'ssr',
        description: 'Server-render pages',
      },
      {
        name: 'Incremental Static Regeneration',
        slug: 'isr',
        description: 'Get the best of both worlds between static & dynamic',
      },
    ],
  },
  {
    name: 'Components',
    items: [
      // TODO: Re-add this page once hooks have been updated.
      // {
      //   name: 'Hooks',
      //   slug: 'hooks',
      //   description:
      //     'Preview the hooks available for Client and Server Components',
      // },
      {
        name: 'Client Context',
        slug: 'context',
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
      },
    ],
  },
  {
    name: 'Styling',
    items: [
      {
        name: 'CSS and CSS-in-JS',
        slug: 'styling',
        description: 'Preview the supported styling solutions',
      },
    ],
  },
];
