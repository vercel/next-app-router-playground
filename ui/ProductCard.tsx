import { type Product } from '@/lib/getProducts';
import { ProductBestSeller } from '@/ui/ProductBestSeller';
import { ProductEstimatedArrival } from '@/ui/ProductEstimatedArrival';
import { ProductImage } from '@/ui/ProductImage';
import { ProductLowStockWarning } from '@/ui/ProductLowStockWarning';
import { ProductPrice } from '@/ui/ProductPrice';
import { ProductRating } from '@/ui/ProductRating';
import { ProductSplitPayments } from '@/ui/ProductSplitPayments';
import { ProductUsedPrice } from '@/ui/ProductUsedPrice';

export const ProductCard = ({ product }: { product: Product }) => {
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

      <ProductRating rating={product.rating} />

      <ProductPrice price={product.price} discount={product.discount} />

      <ProductSplitPayments price={product.price} />

      {product.usedPrice ? (
        <ProductUsedPrice usedPrice={product.usedPrice} />
      ) : null}

      <ProductEstimatedArrival estimatedArrival={product.estimatedArrival} />

      {product.stock <= 1 ? (
        <ProductLowStockWarning stock={product.stock} />
      ) : null}
    </div>
  );
};
