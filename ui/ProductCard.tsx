import { ProductPayload } from '@/lib/queries';
import { ProductBestSeller } from '@/ui/ProductBestSeller';
import { ProductEstimatedArrival } from '@/ui/ProductEstimatedArrival';
import { ProductImage } from '@/ui/ProductImage';
import { ProductLowStockWarning } from '@/ui/ProductLowStockWarning';
import { ProductPrice } from '@/ui/ProductPrice';
import { ProductRating } from '@/ui/ProductRating';
import { ProductSplitPayments } from '@/ui/ProductSplitPayments';
import { ProductUsedPrice } from '@/ui/ProductUsedPrice';
import { dinero, type DineroSnapshot } from 'dinero.js';

export const ProductCard = ({ product }: { product: ProductPayload }) => {
  const price = dinero(product.price as DineroSnapshot<number>);

  return (
    <div className="space-y-2">
      {product.isBestSeller ? (
        <div className="relative">
          <div className="absolute top-2 left-2 flex">
            <ProductBestSeller />
          </div>
          <ProductImage />
        </div>
      ) : (
        <ProductImage />
      )}

      <div className="truncate text-sm text-white">{product.name}</div>

      {product.rating ? <ProductRating rating={product.rating} /> : null}

      <ProductPrice price={price} discount={product.discount} />

      <ProductSplitPayments price={price} />

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
