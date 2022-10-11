import { ProductImage } from '@/ui/ProductImage';
import { ProductRating } from '@/ui/ProductRating';
import clsx from 'clsx';

const ProductSkeletonCard = ({ isLoading }: { isLoading?: boolean }) => {
  return (
    <div
      className={clsx('', {
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent':
          isLoading,
      })}
    >
      <div className="space-y-3">
        <ProductImage />

        <div className="h-3 w-2/3 rounded-full bg-zinc-700"></div>

        <ProductRating rating={0} />

        <div className="h-5 w-14 rounded-full bg-zinc-500"></div>

        <div className="space-y-4">
          <div className="h-3 w-2/3 rounded-full bg-zinc-700"></div>
          <div className="h-3 w-full rounded-full bg-zinc-700"></div>
          <div className="h-3 w-1/2 rounded-full bg-zinc-700"></div>
        </div>
      </div>
    </div>
  );
};

export default function Loading() {
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-zinc-500">Loading...</div>

      <div className="grid grid-cols-3 gap-6">
        <ProductSkeletonCard isLoading />
        <ProductSkeletonCard isLoading />
        <ProductSkeletonCard isLoading />
        <ProductSkeletonCard isLoading />
        <ProductSkeletonCard isLoading />
        <ProductSkeletonCard isLoading />
      </div>
    </div>
  );
}
