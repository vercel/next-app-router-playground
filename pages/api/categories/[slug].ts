import { getCategories } from '@/lib/getCategories';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const category = getCategories().find(
    (category) => category.slug === req.query.slug,
  )!;
  res.json(category);
}
