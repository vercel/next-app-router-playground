// Poor mans relational database

export type Product = {
  id: string;
  name: string;
  image: string;
  category: string;
};

export type Section = {
  id: string;
  name: string;
  slug: string;
  categories: string[];
};

export type Category = {
  id: string;
  name: string;
  section: string;
  slug: string;
  products: string[];
};

const sections: Section[] = [
  {
    id: '1',
    name: 'Clothing',
    slug: 'clothing',
    categories: ['1', '2', '3'],
  },
  {
    id: '2',
    name: 'Electronics',
    slug: 'electronics',
    categories: ['4', '5', '6'],
  },
  {
    id: '3',
    name: 'Sports',
    slug: 'sports',
    categories: ['7', '8', '9'],
  },
];

const categories: Category[] = [
  {
    id: '1',
    name: 'Tops',
    slug: 'tops',
    section: '1',
    products: ['1', '2', '3'],
  },
  {
    id: '2',
    name: 'Shorts',
    slug: 'shorts',
    section: '1',
    products: ['4', '5', '6'],
  },
  {
    id: '3',
    name: 'Shoes',
    slug: 'shoes',
    section: '1',
    products: ['7', '8', '9'],
  },
  {
    id: '4',
    name: 'Phones',
    slug: 'phones',
    section: '2',
    products: ['10', '11', '12'],
  },
  {
    id: '5',
    name: 'Laptops',
    slug: 'laptops',
    section: '2',
    products: ['13', '14', '15'],
  },
  {
    id: '6',
    name: 'Tablets',
    slug: 'tablets',
    section: '2',
    products: ['16', '17', '18'],
  },
  {
    id: '7',
    name: 'Balls',
    slug: 'balls',
    section: '3',
    products: ['19', '20', '21'],
  },
  {
    id: '8',
    name: 'Equipment',
    slug: 'equipment',
    section: '3',
    products: ['22', '23', '24'],
  },
  {
    id: '9',
    name: 'Accessories',
    slug: 'accessories',
    section: '3',
    products: ['25', '26', '27'],
  },
];

const products: Product[] = [
  {
    id: '1',
    name: 'Top',
    image: 'top.png',
    category: '1',
  },
  {
    id: '2',
    name: 'Top 2',
    image: 'top.png',
    category: '1',
  },
  {
    id: '3',
    name: 'Top 3',
    image: 'top.png',
    category: '1',
  },

  {
    id: '4',
    name: 'Shorts 1',
    image: 'shorts.png',
    category: '2',
  },
  {
    id: '5',
    name: 'Shorts 2',
    image: 'shorts.png',
    category: '2',
  },
  {
    id: '6',
    name: 'Shorts 3',
    image: 'shorts.png',
    category: '2',
  },

  {
    id: '7',
    name: 'Shoes 1',
    image: 'shoes.png',
    category: '3',
  },
  {
    id: '8',
    name: 'Shoes 2',
    image: 'shoes.png',
    category: '3',
  },
  {
    id: '9',
    name: 'Shoes 3',
    image: 'shoes.png',
    category: '3',
  },

  {
    id: '10',
    name: 'Phones 1',
    image: 'phone.png',
    category: '4',
  },
  {
    id: '11',
    name: 'Phones 2',
    image: 'phone.png',
    category: '4',
  },
  {
    id: '12',
    name: 'Phones 3',
    image: 'phone.png',
    category: '4',
  },
  {
    id: '13',
    name: 'Laptops 1',
    image: 'laptop.png',
    category: '5',
  },
  {
    id: '14',
    name: 'Laptops 2',
    image: 'laptop.png',
    category: '5',
  },
  {
    id: '15',
    name: 'Laptops 3',
    image: 'laptop.png',
    category: '5',
  },
  {
    id: '16',
    name: 'Tablets 1',
    image: 'tablet.png',
    category: '6',
  },
  {
    id: '17',
    name: 'Tablets 2',
    image: 'tablet.png',
    category: '6',
  },
  {
    id: '18',
    name: 'Tablets 3',
    image: 'tablet.png',
    category: '6',
  },
  {
    id: '19',
    name: 'Balls 1',
    image: 'balls.png',
    category: '7',
  },
  {
    id: '20',
    name: 'Balls 2',
    image: 'balls.png',
    category: '7',
  },
  {
    id: '21',
    name: 'Balls 3',
    image: 'balls.png',
    category: '7',
  },
  {
    id: '22',
    name: 'Weights 1',
    image: 'weights.png',
    category: '8',
  },
  {
    id: '23',
    name: 'Weights 2',
    image: 'weights.png',
    category: '8',
  },
  {
    id: '24',
    name: 'Weights 3',
    image: 'weights.png',
    category: '8',
  },
  {
    id: '25',
    name: 'Gloves 1',
    image: 'gloves.png',
    category: '9',
  },
  {
    id: '26',
    name: 'Gloves 2',
    image: 'gloves.png',
    category: '9',
  },
  {
    id: '27',
    name: 'Gloves 3',
    image: 'gloves.png',
    category: '9',
  },
];

// TODO: move this to a dal or ORM file and then import the _data
// include a note at the top of the file explaining that this is a mock database, typically you would use an ORM, database client or fetch from an external API

// Basic getters by ID
export const getSectionById = (id: string): Section | undefined =>
  sections.find((section) => section.id === id);

export const getCategoryById = (id: string): Category | undefined =>
  categories.find((category) => category.id === id);

export const getProductById = (id: string): Product | undefined =>
  products.find((product) => product.id === id);

// Getters by slug
export const getSectionBySlug = (slug: string): Section | undefined =>
  sections.find((section) => section.slug === slug);

export const getCategoryBySlug = (slug: string): Category | undefined =>
  categories.find((category) => category.slug === slug);

// Relational queries
export const getCategoriesBySection = (sectionId: string): Category[] =>
  categories.filter((category) => category.section === sectionId);

export const getProductsByCategory = (categoryId: string): Product[] =>
  products.filter((product) => product.category === categoryId);

// Convenience function to get all products in a section
export const getProductsBySection = (sectionId: string): Product[] => {
  const sectionCategories = getCategoriesBySection(sectionId);
  return products.filter((product) =>
    sectionCategories.some((category) => category.id === product.category),
  );
};

// Get all products
export const getProducts = ({ limit }: { limit?: number } = {}): Product[] => {
  // Mix up the order of products for visual interest
  const sorted = [...products].sort(
    (a, b) => (Number(a.id) % 3) - (Number(b.id) % 3),
  );
  return limit ? sorted.slice(0, limit) : sorted;
};

// Get all sections
export const getSections = (): Section[] => sections;
