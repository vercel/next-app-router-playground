import { ProductDeal } from '#/ui/ProductDeal';
import { add, formatDistanceToNow } from 'date-fns';
import { type Dinero } from 'dinero.js';

export const ProductLighteningDeal = ({
  price,
  discount,
}: {
  price: Dinero<number>;
  discount: {
    amount: Dinero<number>;
    expires?: number;
  };
}) => {
  const date = add(new Date(), { days: discount.expires });

  return (
    <>
      <div className="flex">
        <div className="rounded bg-vercel-pink px-1 text-xs text-pink-100">
          Expires in {formatDistanceToNow(date)}
        </div>
      </div>

      <ProductDeal price={price} discount={discount} />
    </>
  );
};
