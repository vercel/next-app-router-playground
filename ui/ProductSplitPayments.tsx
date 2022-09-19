import { ProductCurrencySymbol } from '@/ui/ProductCurrencySymbol';
import { allocate, dinero, DineroSnapshot, toUnit, up } from 'dinero.js';

export const ProductSplitPayments = ({
  price: priceRaw,
}: {
  price: DineroSnapshot<number>;
}) => {
  const price = dinero(priceRaw);

  if (toUnit(price) < 150) {
    return null;
  }

  const [perMonth] = allocate(price, [1, 2]);
  return (
    <div className="text-sm text-zinc-400">
      Or <ProductCurrencySymbol dinero={price} />
      {toUnit(perMonth, { digits: 0, round: up })}/month for 3 months
    </div>
  );
};
