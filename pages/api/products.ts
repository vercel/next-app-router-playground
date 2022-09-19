import { getProducts } from '@/lib/getProducts';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const products = getProducts();
  res.json(products);
}
