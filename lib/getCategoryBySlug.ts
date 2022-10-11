import prisma from '@/lib/prisma';
import { type Prisma } from '@prisma/client';

export const getCategoryBySlug = async (slug: string) =>
  prisma.category.findUnique({
    where: {
      slug,
    },
    select: {
      name: true,
    },
  });

export type CategoryPayload = Prisma.PromiseReturnType<
  typeof getCategoryBySlug
>;
