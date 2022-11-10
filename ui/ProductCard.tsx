import { type IProduct } from '#/lib/data/products';
import { ProductBestSeller } from '#/ui/ProductBestSeller';
import { ProductEstimatedArrival } from '#/ui/ProductEstimatedArrival';
import { ProductLowStockWarning } from '#/ui/ProductLowStockWarning';
import { ProductPrice } from '#/ui/ProductPrice';
import { ProductRating } from '#/ui/ProductRating';
import { ProductUsedPrice } from '#/ui/ProductUsedPrice';
import { dinero, type DineroSnapshot } from 'dinero.js';
import Image from 'next/image';

export const ProductCard = ({ product }: { product: IProduct }) => {
  const price = dinero(product.price as DineroSnapshot<number>);

  return (
    <div className="space-y-2">
      <div className="relative">
        {product.isBestSeller ? (
          <div className="absolute top-2 left-2 flex">
            <ProductBestSeller />
          </div>
        ) : null}
        <Image
          src={`/${product.image}`}
          width={400}
          height={400}
          className="rounded-xl grayscale"
          alt={product.name}
          placeholder="blur"
          blurDataURL={product.imageBlur}
        />
      </div>

      <div className="truncate text-sm text-white">{product.name}</div>

      {product.rating ? <ProductRating rating={product.rating} /> : null}

      <ProductPrice price={price} discount={product.discount} />

      {/* <ProductSplitPayments price={price} /> */}

      {product.usedPrice ? (
        <ProductUsedPrice usedPrice={product.usedPrice} />
      ) : null}

      <ProductEstimatedArrival leadTime={product.leadTime} />

      {product.stock <= 1 ? (
        <ProductLowStockWarning stock={product.stock} />
      ) : null}
    </div>
  );
};
