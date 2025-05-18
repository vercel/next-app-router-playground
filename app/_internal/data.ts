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
    products: ['1'],
  },
  {
    id: '2',
    name: 'Shorts',
    slug: 'shorts',
    section: '1',
    products: ['2'],
  },
  {
    id: '3',
    name: 'Shoes',
    slug: 'shoes',
    section: '1',
    products: ['3'],
  },
  {
    id: '4',
    name: 'Phones',
    slug: 'phones',
    section: '2',
    products: ['4'],
  },
  {
    id: '5',
    name: 'Laptops',
    slug: 'laptops',
    section: '2',
    products: ['5'],
  },
  {
    id: '6',
    name: 'Tablets',
    slug: 'tablets',
    section: '2',
    products: ['6'],
  },
  {
    id: '7',
    name: 'Balls',
    slug: 'balls',
    section: '3',
    products: ['7'],
  },
  {
    id: '8',
    name: 'Equipment',
    slug: 'equipment',
    section: '3',
    products: ['8'],
  },
  {
    id: '9',
    name: 'Accessories',
    slug: 'accessories',
    section: '3',
    products: ['9'],
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
    name: 'Shorts',
    image: 'shorts.png',
    category: '2',
  },
  {
    id: '3',
    name: 'Shoes',
    image: 'shoes.png',
    category: '3',
  },

  {
    id: '4',
    name: 'Phone',
    image: 'phone.png',
    category: '4',
  },
  {
    id: '5',
    name: 'Laptop',
    image: 'laptop.png',
    category: '5',
  },
  {
    id: '6',
    name: 'Tablet',
    image: 'tablet.png',
    category: '6',
  },
  {
    id: '7',
    name: 'Basketball',
    image: 'balls.png',
    category: '7',
  },
  {
    id: '8',
    name: 'Weights',
    image: 'weights.png',
    category: '8',
  },
  {
    id: '9',
    name: 'Gloves',
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

type ProductWhere = {
  id?: string;
  category?: string;
  section?: string;
  // Add more fields as needed
};

type ProductFindOptions = {
  where?: ProductWhere;
  limit?: number;
};

// Poor mans ORM
// Largely inspired by Prisma's elegant API which is easy to understand at a glance
const db = {
  product: {
    find: (options: ProductFindOptions) => {
      let product: Product | undefined;

      if (options.where?.id !== undefined) {
        product = products.find((p) => p.id === options.where?.id);
      } else if (options.where?.category !== undefined) {
        product = products.find((p) => p.category === options.where?.category);
      }

      let prev: string | undefined = undefined;
      let next: string | undefined = undefined;

      if (product) {
        const ids = products.map((p) => Number(p.id));
        const currentIndex = ids.indexOf(Number(product.id));
        const prevIndex = (currentIndex - 1 + ids.length) % ids.length;
        const nextIndex = (currentIndex + 1) % ids.length;

        prev = products[prevIndex]?.id;
        next = products[nextIndex]?.id;
      }

      return {
        data: product,
        prev,
        next,
      };
    },
    findMany: (options: ProductFindOptions = {}) => {
      let result = products;

      if (options.where?.category) {
        result = result.filter(
          (product) => product.category === options.where!.category,
        );
      }

      if (options.where?.section) {
        const sectionCategories = categories
          .filter((category) => category.section === options.where!.section)
          .map((category) => category.id);
        result = result.filter((product) =>
          sectionCategories.includes(product.category),
        );
      }

      if (options.limit !== undefined) {
        result = result.slice(0, options.limit);
      }

      return result;
    },
  },
};

export { db };
