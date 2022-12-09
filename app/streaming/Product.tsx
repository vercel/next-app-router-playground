import { Pricing, PricingSkeleton } from '#/app/streaming/Pricing';
import { type IProduct } from '#/lib/data/products';
import { ProductRating } from '#/ui/ProductRating';
import Image from 'next/image';
import { Suspense } from 'react';

export const Product = ({
  product,
  cartCount,
}: {
  product: IProduct;
  cartCount: string;
}) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-full lg:col-span-1">
        <div className="space-y-2">
          <Image
            src={`/${product.image}`}
            className="hidden rounded-lg grayscale lg:block"
            alt={product.name}
            height={400}
            width={400}
          />

          <div className="flex space-x-2">
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg grayscale"
                alt={product.name}
                height={180}
                width={180}
              />
            </div>
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg grayscale"
                alt={product.name}
                height={180}
                width={180}
              />
            </div>
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg grayscale"
                alt={product.name}
                height={180}
                width={180}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-full space-y-4 lg:col-span-2">
        <div className="truncate text-xl font-medium text-white lg:text-2xl">
          {product.name}
        </div>

        <ProductRating rating={product.rating} />

        <div className="space-y-4 text-sm text-gray-200">
          {product.description}
        </div>
      </div>

      <div className="col-span-full lg:col-span-1">
        <Suspense fallback={<PricingSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <Pricing product={product} cartCount={cartCount} />
        </Suspense>
      </div>
    </div>
  );
};
