import { add, format, isTomorrow } from 'date-fns';

export const ProductEstimatedArrival = ({ leadTime }: { leadTime: number }) => {
  const date = add(new Date(), {
    days: leadTime,
  });

  return (
    <div className="text-sm text-zinc-300">
      Get it{' '}
      <strong className="font-bold">
        {isTomorrow(date) ? 'tomorrow, ' : null}
        {format(date, 'MMM d')}
      </strong>
    </div>
  );
};
