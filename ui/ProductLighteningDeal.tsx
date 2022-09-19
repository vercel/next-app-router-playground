import { ProductDeal } from '@/ui/ProductDeal';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { type Dinero } from 'dinero.js';

export const ProductLighteningDeal = ({
  price,
  discount,
  expires,
}: {
  price: Dinero<number>;
  discount: Dinero<number>;
  expires: string;
}) => {
  const date = parseISO(expires);

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
