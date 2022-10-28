const products = [
  {
    id: '0',
    categoryId: '1',
    stock: 2,
    rating: 5,
    image: 'eniko-kis-KsLPTsYaqIQ-unsplash.jpg',
    name: 'What is streaming?',
    price: {
      amount: 4200,
      currency: { code: 'USD', base: 10, exponent: 2 },
      scale: 2,
    },
    isBestSeller: false,
    leadTime: 1,
    discount: { percent: 70, expires: 7 },
  },
  {
    id: '1',
    categoryId: '1',
    stock: 5,
    rating: 4,
    name: 'Fusce commodo porta posuere',
    image: 'patrick-OIFgeLnjwrM-unsplash.jpg',
    price: {
      amount: 4600,
      currency: { code: 'USD', base: 10, exponent: 2 },
      scale: 2,
    },
    isBestSeller: false,
    leadTime: 1,
    discount: { percent: 70, expires: 7 },
  },

  {
    id: '3',
    categoryId: '1',
    stock: 3,
    rating: 3,
    image: 'yoann-siloine-_T4w3JDm6ug-unsplash.jpg',
    name: 'Praesent tincidunt lectus',
    price: {
      amount: 29200,
      currency: { code: 'USD', base: 10, exponent: 2 },
      scale: 2,
    },
    isBestSeller: true,
    leadTime: 2,
  },
  {
    id: '2',
    categoryId: '1',
    stock: 2,
    rating: 5,
    image: 'alexander-andrews-brAkTCdnhW8-unsplash.jpg',
    name: 'Morbi at viverra turpis',
    price: {
      amount: 21200,
      currency: { code: 'USD', base: 10, exponent: 2 },
      scale: 2,
    },
    isBestSeller: false,
    leadTime: 2,
  },
  {
    id: '5',
    categoryId: '1',
    stock: 1,
    rating: 4,
    image: 'guillaume-coupy-6HuoHgK7FN8-unsplash.jpg',
    name: 'Maecenas interdum',
    price: {
      amount: 28700,
      currency: { code: 'USD', base: 10, exponent: 2 },
      scale: 2,
    },
    isBestSeller: false,
    leadTime: 4,
  },
];
export interface IProduct {
  id: string;
  image?: string;
  categoryId: string;
  stock: number;
  rating: number;
  name: string;
  price: Price;
  isBestSeller: boolean;
  leadTime: number;
  discount?: Discount;
  usedPrice?: UsedPrice;
}

export interface Price {
  amount: number;
  currency: Currency;
  scale: number;
}

export interface Currency {
  code: string;
  base: number;
  exponent: number;
}

export interface Discount {
  percent: number;
  expires?: number;
}

export interface UsedPrice {
  amount: number;
  currency: Currency2;
  scale: number;
}

export interface Currency2 {
  code: string;
  base: number;
  exponent: number;
}

export default products;
