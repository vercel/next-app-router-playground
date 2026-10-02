import 'server-only';
import db from '#/lib/db';
import { cacheLife } from 'next/cache';

export async function getProduct(id: string, example: string) {
  'use cache';
  cacheLife('hours');

  // Each example and suffixed ID has its own cache entry, so visiting one
  // example does not warm the next. The delay stands in for a database query.
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const productId = /^([1-9])(?:-[a-z0-9-]+)?$/.exec(id)?.[1];
  const product = productId
    ? db.product.find({ where: { id: productId } })
    : null;

  return { product, cachedAt: new Date().toISOString(), example };
}
