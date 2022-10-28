import products from '@/lib/data/products';
import { ProductCard } from '@/ui/ProductCard';
import Link from 'next/link';
import { delay } from './delay';

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

function Skeleton() {
  return (
    <div className="space-y-4">
      <div className={`relative h-[166px] rounded-xl bg-zinc-900 ${shimmer}`} />

      <div className="h-4 w-full rounded-lg bg-zinc-900" />
      <div className="h-6 w-1/3 rounded-lg bg-zinc-900" />
      <div className="h-4 w-full rounded-lg bg-zinc-900" />
      <div className="h-4 w-4/6 rounded-lg bg-zinc-900" />
    </div>
  );
}

export function RecommendedProductsSkeleton() {
  return (
    <div className="space-y-6">
      <div className={`h-7 w-2/5 rounded-lg bg-zinc-900 ${shimmer}`} />

      <div className="grid grid-cols-4 gap-6">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
}

export async function RecommendedProducts() {
  // Normally you would fetch data here
  await delay(800);

  return (
    <div className="space-y-6">
      <div className="text-xl font-medium text-white">Recommended Products</div>
      <div className="grid grid-cols-4 gap-6">
        {products.slice(1, 5).map((product) => (
          <Link
            key={product.id}
            className="block"
            href={`/streaming-alt2/${product.id}`}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
