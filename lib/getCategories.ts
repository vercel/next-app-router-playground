export type Category = {
  name: string;
  slug: string;
  count: number;
  items: Omit<Category, 'items'>[];
};

export const getCategories = (): Category[] => [
  {
    name: 'Electronics',
    slug: 'electronics',
    count: 11,
    items: [
      { name: 'Phones', slug: 'phones', count: 4 },
      { name: 'Tablets', slug: 'tablets', count: 5 },
      { name: 'Laptops', slug: 'laptops', count: 2 },
    ],
  },
  {
    name: 'Clothing',
    slug: 'clothing',
    count: 12,
    items: [
      { name: 'Tops', slug: 'tops', count: 3 },
      { name: 'Shorts', slug: 'shorts', count: 4 },
      { name: 'Shoes', slug: 'shoes', count: 5 },
    ],
  },
  {
    name: 'Books',
    slug: 'books',
    count: 10,
    items: [
      { name: 'Fiction', slug: 'fiction', count: 5 },
      { name: 'Biography', slug: 'biography', count: 2 },
      { name: 'Education', slug: 'education', count: 3 },
    ],
  },
];
