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
  // {
  //   name: 'Client/Server Components (WIP)',
  //   slug: 'components-types',
  // },
  //
  // { name: 'Parallel routes', href: '#', isDisabled: true },
  {
    name: 'Intercepting Routes',
    items: [
      {
        name: 'Modals',
        slug: 'modals',
        isDisabled: true,
      },
    ],
  },
];
