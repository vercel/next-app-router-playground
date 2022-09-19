import { dinero, DineroSnapshot, toUnit, up } from 'dinero.js';

export const ProductUsedPrice = ({
  usedPrice,
}: {
  usedPrice: DineroSnapshot<number>;
}) => {
  const price = dinero(usedPrice);

  return (
    <div className="text-sm">
      <div className="text-zinc-400">More buying choices</div>
      <div className="text-zinc-200">
        ${toUnit(price, { digits: 0, round: up })} (used)
      </div>
    </div>
  );
};
