import prisma from '@/lib/prisma';
import { type Prisma } from '@prisma/client';

export const getProductsByCategory = async (slug: string) =>
  prisma.product.findMany({
    where: {
      category: {
        slug,
      },
    },
    orderBy: { order: 'asc' },
    select: {
      id: true,
      name: true,
      isBestSeller: true,
      leadTime: true,
      stock: true,
      rating: true,
      price: true,
      discount: true,
      usedPrice: true,
    },
  });

export type ProductPayload = Prisma.PromiseReturnType<
  typeof getProductsByCategory
>[0];
