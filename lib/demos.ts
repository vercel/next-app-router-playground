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
      {
        name: 'Template',
        slug: 'template',
        isDisabled: true,
      },
    ],
  },
  {
    name: 'Components',
    items: [
      {
        name: 'Client and Server Components',
        slug: 'components',
        description:
          'Preview the effect Server Components have on the component JS sent to the client',
      },
      {
        name: 'Hooks',
        slug: 'hooks',
        description:
          'Preview the hooks available for Client and Server Components',
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

  {
    name: 'Advanced Routing Patterns',
    items: [
      {
        name: 'Intercepting Routes',
        slug: 'intercepting-routes',
        isDisabled: true,
      },
      {
        name: 'Parallel Routes',
        slug: 'parallel-routes',
        isDisabled: true,
      },
    ],
  },
];
