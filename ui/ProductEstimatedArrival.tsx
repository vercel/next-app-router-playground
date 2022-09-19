import { format, isTomorrow, parseISO } from 'date-fns';

export const ProductEstimatedArrival = ({
  estimatedArrival,
}: {
  estimatedArrival: string;
}) => {
  const date = parseISO(estimatedArrival);

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
