type Item = {
  name: string;
  items: {
    name: string;
    slug: string;
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
        // slug: 'nested-layouts',
      },
      {
        name: 'Grouped Layouts',
        slug: 'route-groups',
        isDisabled: true,
      },
      {
        name: 'Root Layouts',
        slug: 'root-layouts',
        isDisabled: true,
      },
    ],
  },
  {
    name: 'Instant Loading States',
    items: [
      {
        name: 'Default Skeletons',
        slug: 'loading',
        // slug: 'segment-skeletons',
      },
      {
        name: 'Custom Per-Page Skeletons',
        slug: 'page-skeletons',
        isDisabled: true,
      },
    ],
  },
  {
    name: 'Routing',
    items: [
      {
        name: 'Soft Push Navigation',
        slug: 'soft-push',
        isDisabled: true,
      },
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
