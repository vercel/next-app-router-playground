import { USD } from '@dinero.js/currencies';
import { faker } from '@faker-js/faker';
import { Prisma, PrismaClient } from '@prisma/client';
import { dinero, multiply, toSnapshot } from 'dinero.js';

const prisma = new PrismaClient();
const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const generateRandomProduct = (
  categoryId: string,
): Prisma.ProductCreateManyInput => {
  const rating = randomNumber(3, 5);
  const stock = randomNumber(0, 10);
  const price = dinero({
    amount: randomNumber(10, 300) * 100,
    currency: USD,
  });
  const discount =
    // give this product a discount 1/4 times
    randomNumber(1, 4) === 1
      ? {
          percent: randomNumber(50, 90),
          // give this discount an expiry date 1/3 times
          ...(randomNumber(1, 3) === 1
            ? {
                expires: randomNumber(2, 7),
              }
            : {}),
        }
      : undefined;
  const usedPrice =
    // give this product a used price 1/4 times
    randomNumber(1, 4) === 1
      ? multiply(price, {
          amount: randomNumber(70, 80),
          scale: 2,
        })
      : undefined;
  return {
    categoryId,
    stock,
    rating,
    name: faker.commerce.productName(),
    price: toSnapshot(price),
    isBestSeller: randomNumber(1, 4) === 1,
    leadTime: randomNumber(1, 4),
    ...(usedPrice ? { usedPrice: toSnapshot(usedPrice) } : {}),
    ...(discount ? { discount } : {}),
  };
};
const electronics = {
  name: 'Electronics',
  slug: 'electronics',
  children: {
    createMany: {
      data: [
        {
          name: 'Phones',
          slug: 'phones',
        },
        {
          name: 'Tablets',
          slug: 'tablets',
        },
        {
          name: 'Laptops',
          slug: 'laptops',
        },
      ],
    },
  },
};
const clothing = {
  name: 'Clothing',
  slug: 'clothing',
  children: {
    createMany: {
      data: [
        {
          name: 'Tops',
          slug: 'tops',
        },
        {
          name: 'Shorts',
          slug: 'shorts',
        },
        {
          name: 'Shoes',
          slug: 'shoes',
        },
      ],
    },
  },
};
const books = {
  name: 'Books',
  slug: 'books',
  children: {
    createMany: {
      data: [
        {
          name: 'Fiction',
          slug: 'fiction',
        },
        {
          name: 'Biography',
          slug: 'biography',
        },
        {
          name: 'Education',
          slug: 'education',
        },
      ],
    },
  },
};
async function main() {
  await prisma.category.create({ data: electronics });
  await prisma.category.create({ data: clothing });
  await prisma.category.create({ data: books });
  const categories = await prisma.category.findMany();
  categories.forEach(async (category) => {
    const products = Array.from({ length: randomNumber(6, 9) }).map(() =>
      generateRandomProduct(category.id),
    );
    await prisma.product.createMany({ data: products });
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
