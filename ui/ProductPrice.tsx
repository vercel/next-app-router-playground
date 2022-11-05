import { IProduct } from '#/lib/data/products';
import { ProductCurrencySymbol } from '#/ui/ProductCurrencySymbol';
import { ProductDeal } from '#/ui/ProductDeal';
import { ProductLighteningDeal } from '#/ui/ProductLighteningDeal';
import { multiply, toUnit, type Dinero } from 'dinero.js';

function isDiscount(obj: any): obj is { percent: number; expires?: number } {
  return typeof obj?.percent === 'number';
}

function formatDiscount(
  price: Dinero<number>,
  discountRaw: IProduct['discount'],
) {
  return isDiscount(discountRaw)
    ? {
        amount: multiply(price, {
          amount: discountRaw.percent,
          scale: 2,
        }),
        expires: discountRaw.expires,
      }
    : undefined;
}

export const ProductPrice = ({
  price,
  discount: discountRaw,
}: {
  price: Dinero<number>;
  discount: IProduct['discount'];
}) => {
  const discount = formatDiscount(price, discountRaw);

  if (discount) {
    if (discount?.expires && typeof discount.expires === 'number') {
      return <ProductLighteningDeal price={price} discount={discount} />;
    }
    return <ProductDeal price={price} discount={discount} />;
  }

  return (
    <div className="flex">
      <div className="text-sm leading-snug text-white">
        <ProductCurrencySymbol dinero={price} />
      </div>
      <div className="text-lg font-bold leading-snug text-white">
        {toUnit(price)}
      </div>
    </div>
  );
};
