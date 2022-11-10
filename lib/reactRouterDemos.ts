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
    name: 'React Router',
    items: [
      {
        name: 'About',
        slug: 'about',
        description: 'About page',
      },
      {
        name: 'Dashboard',
        slug: 'dashboard',
        description: 'An example dashboard',
      },
      {
        name: 'Nothing Here',
        slug: 'nothing-here',
        description: 'There is nothing to see here',
      },
    ],
  },
];
