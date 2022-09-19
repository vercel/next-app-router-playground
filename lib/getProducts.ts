import { USD } from '@dinero.js/currencies';
import { faker } from '@faker-js/faker';
import { add, formatISO } from 'date-fns';
import { dinero, multiply, toSnapshot } from 'dinero.js';

const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const generateRandomProduct = () => {
  const rating = randomNumber(1, 5);
  const stock = randomNumber(0, 10);

  const price = dinero({
    amount: randomNumber(10, 300) * 100,
    currency: USD,
  });

  const discount =
    randomNumber(1, 4) === 1
      ? {
          amount: toSnapshot(
            multiply(price, {
              amount: randomNumber(50, 90),
              scale: 2,
            }),
          ),
          ...(randomNumber(1, 3) === 1
            ? {
                expires: formatISO(
                  add(new Date(), {
                    days: randomNumber(3, 7),
                  }),
                ),
              }
            : {}),
        }
      : undefined;

  const usedPrice =
    randomNumber(1, 4) === 1
      ? multiply(price, {
          amount: randomNumber(70, 80),
          scale: 2,
        })
      : undefined;

  const estimatedArrival = formatISO(
    add(new Date(), {
      days: randomNumber(1, 4),
    }),
  );

  return {
    name: faker.commerce.productName(),
    stock,
    rating,
    isBestSeller: randomNumber(1, 4) === 1,
    price: toSnapshot(price),
    estimatedArrival,
    ...(discount ? { discount } : {}),
    ...(usedPrice ? { usedPrice: toSnapshot(usedPrice) } : {}),
  };
};

export type Product = ReturnType<typeof generateRandomProduct>;

export const getProducts = (count: number = 10) => {
  return Array.from({ length: count }).map(generateRandomProduct);
};
