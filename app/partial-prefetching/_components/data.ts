import 'server-only';
import { cookies } from 'next/headers';
import { cacheLife, cacheTag } from 'next/cache';
import db, { type Product } from '#/lib/db';

const SLOW_MS = 1500;
const SLOW_RECS_MS = 3000;

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

function now() {
  return new Date().toISOString().slice(11, 19);
}

export function findProduct(id: string): Product | null {
  return db.product.find({ where: { id } });
}

export function listProducts(limit = 9): Product[] {
  return db.product.findMany({ limit });
}

// /product/[id]. Cached, keyed by the product id (which is in the URL).
// A `<Link prefetch={true}>` can include this in the prefetch payload.
export async function getProductCopy(productId: string) {
  'use cache';
  cacheTag(`product-copy-${productId}`);
  cacheLife({ stale: 60 });
  await delay(SLOW_MS);
  const product = findProduct(productId);
  return {
    headline: product
      ? `${product.name}: built for everyday use`
      : 'Unknown product',
    body: 'Crafted from premium materials with a one-year warranty. Ships free over $50. Reviewed weekly by our editorial team.',
    reviewCount: 80 + (((Number(productId) || 1) * 17) % 220),
    avgRating: Number(
      (3.6 + (((Number(productId) || 1) * 0.37) % 1.4)).toFixed(1),
    ),
  };
}

// /for-you/[id]. Private cache that reads the session cookie. Only
// included in the prefetch when the destination route exports
// `prefetch = 'allow-runtime'`.
export async function getRecommendationsForViewer(productId: string) {
  'use cache: private';
  cacheTag(`recs-${productId}`);
  cacheLife({ stale: 60 });
  await delay(SLOW_RECS_MS);
  const sessionId = (await cookies()).get('session-id')?.value ?? 'guest';
  const all = db.product.findMany({ limit: 9 });
  const seed =
    (sessionId + productId)
      .split('')
      .reduce((acc, ch) => ch.charCodeAt(0) + ((acc << 5) - acc), 0) >>> 0;
  const start = seed % Math.max(1, all.length - 3);
  return { items: all.slice(start, start + 3), sessionId, builtAt: now() };
}

// Live stock & viewers for a given product. Uncached on purpose: never
// part of any prefetch payload, always streams in after the click.
export async function getLiveStock(productId: string) {
  await delay(SLOW_MS);
  const seed = Number(productId) || 1;
  return {
    stock: 3 + Math.floor(Math.random() * 12),
    viewers: 5 + ((seed * 31 + Math.floor(Math.random() * 50)) % 60),
  };
}
