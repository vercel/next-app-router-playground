import { Product } from '@/lib/getProducts';
import { ProductCurrencySymbol } from '@/ui/ProductCurrencySymbol';
import { ProductDeal } from '@/ui/ProductDeal';
import { ProductLighteningDeal } from '@/ui/ProductLighteningDeal';
import { dinero, DineroSnapshot, toUnit } from 'dinero.js';

export const ProductPrice = ({
  price: priceRaw,
  discount: discountRaw,
}: {
  price: DineroSnapshot<number>;
  discount: Product['discount'];
}) => {
  const price = dinero(priceRaw);

  if (discountRaw) {
    const discount = dinero(discountRaw.amount);

    if (discountRaw.expires) {
      return (
        <ProductLighteningDeal
          price={price}
          discount={discount}
          expires={discountRaw.expires}
        />
      );
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
