import { JsonValue } from '@/lib/db/types';
import { dinero, toUnit, up, type DineroSnapshot } from 'dinero.js';

export const ProductUsedPrice = ({
  usedPrice: usedPriceRaw,
}: {
  usedPrice: JsonValue;
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
