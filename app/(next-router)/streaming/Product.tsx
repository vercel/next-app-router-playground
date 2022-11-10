import { type IProduct } from '#/lib/data/products';
import { ProductEstimatedArrival } from '#/ui/ProductEstimatedArrival';
import { ProductLowStockWarning } from '#/ui/ProductLowStockWarning';
import { ProductPrice } from '#/ui/ProductPrice';
import { ProductRating } from '#/ui/ProductRating';
import { ProductSplitPayments } from '#/ui/ProductSplitPayments';
import { ProductUsedPrice } from '#/ui/ProductUsedPrice';
import { dinero, type DineroSnapshot } from 'dinero.js';
import Image from 'next/image';
import { Suspense } from 'react';
import { AddToCart } from './AddToCart';
import { delay } from './delay';

const shimmer = `relative overflow-hidden rounded-xl before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

function PricingSkeleton() {
  return (
    <div
      className={`h-[161px] space-y-4 rounded-lg bg-gray-800 ${shimmer}`}
    ></div>
  );
}

async function Pricing({
  product,
  cartCount,
}: {
  product: IProduct;
  cartCount: number;
}) {
  const price = dinero(product.price as DineroSnapshot<number>);

  // Normally you would fetch data here
  await delay(600);

  return (
    <div className="space-y-4 rounded-lg bg-gray-900 p-3">
      <ProductPrice price={price} discount={product.discount} />
      <ProductSplitPayments price={price} />
      {product.usedPrice ? (
        <ProductUsedPrice usedPrice={product.usedPrice} />
      ) : null}
      <ProductEstimatedArrival leadTime={product.leadTime} hasDeliveryTime />
      {product.stock <= 1 ? (
        <ProductLowStockWarning stock={product.stock} />
      ) : null}
      <div className="space-y-2">
        <AddToCart initialCartCount={Number(cartCount)} />
      </div>
    </div>
  );
}

export const Product = ({
  product,
  cartCount,
}: {
  product: IProduct;
  cartCount: string;
}) => {
  return (
    <div className="grid grid-cols-8 gap-6">
      <div className="col-span-2">
        <div className="space-y-2">
          <Image
            src={`/${product.image}`}
            className="rounded-lg"
            alt={product.name}
            height={400}
            width={400}
          />

          <div className="flex space-x-2">
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg"
                alt={product.name}
                height={80}
                width={80}
              />
            </div>
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg"
                alt={product.name}
                height={80}
                width={80}
              />
            </div>
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg"
                alt={product.name}
                height={80}
                width={80}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4 space-y-4">
        <div className="truncate text-2xl font-medium text-white">
          {product.name}
        </div>

        <ProductRating rating={product.rating} />

        <div className="space-y-4 text-sm text-gray-200">
          <p>
            Streaming allows you to progressively render and send units of the
            UI from the server to the client.
          </p>
          <p>
            In this example product page, you'll notice the product information
            is loaded first, followed by recommended items, and finally the
            shopping cart count.
          </p>
          <p>
            This allows the user to see and interact with the most essential
            parts of the page while the rest of the content loads - instead of
            waiting for the whole page to load before they can interact with
            anything.
          </p>

          <p>
            You can reload the page to replay the demo. To learn more about
            streaming, see the{' '}
            <a
              className="font-medium text-white"
              href="https://beta.nextjs.org/docs/data-fetching/streaming-and-suspense"
            >
              Streaming and Suspense Docs
            </a>
            .
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Suspense fallback={<PricingSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <Pricing product={product} cartCount={cartCount} />
        </Suspense>
      </div>
    </div>
  );
};
