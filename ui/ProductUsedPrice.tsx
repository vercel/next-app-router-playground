import { IProduct } from '@/lib/data/products';
import { dinero, toUnit, up, type DineroSnapshot } from 'dinero.js';

export const ProductUsedPrice = ({
  usedPrice: usedPriceRaw,
}: {
  usedPrice: IProduct['usedPrice'];
}) => {
  const usedPrice = dinero(usedPriceRaw as DineroSnapshot<number>);

  return (
    <div className="text-sm">
      <div className="text-zinc-400">More buying choices</div>
      <div className="text-zinc-200">
        ${toUnit(usedPrice, { digits: 0, round: up })} (used)
      </div>
    </div>
  );
};
