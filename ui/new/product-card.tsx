import { Product } from '#/app/_internal/data';
import clsx from 'clsx';
import Image from 'next/image';

export function ProductCard({
  product,
  animateEnter,
}: {
  product: Product;
  animateEnter?: boolean;
}) {
  return (
    <div className="group flex flex-col gap-2.5">
      <div className="overflow-hidden rounded-md bg-gray-900/50 p-8 group-hover:bg-gray-900">
        <Image
          className={clsx(animateEnter && 'transition-enter')}
          src={`/shop/${product.image}`}
          alt={product.name}
          quality={90}
          width={400}
          height={400}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-2 w-4/5 rounded-full bg-gray-800" />
        <div className="h-2 w-1/3 rounded-full bg-gray-800" />
      </div>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="group flex flex-col gap-2.5">
      <div
        className={clsx(
          'aspect-square overflow-hidden rounded-md bg-gray-900/50',
          'relative before:absolute before:inset-0',
          'before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent',
          'before:translate-x-[-50%] before:opacity-0',
          'before:animate-shimmer',
        )}
      />

      <div className="flex flex-col gap-2">
        <div className="h-2 w-4/5 rounded-full bg-gray-800" />
        <div className="h-2 w-1/3 rounded-full bg-gray-800" />
      </div>
    </div>
  );
}
