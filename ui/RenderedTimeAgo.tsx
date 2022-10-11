'client';

import clsx from 'clsx';
import { differenceInMilliseconds } from 'date-fns';
import ms from 'ms';
import React from 'react';
import { useInterval } from 'react-use';
export function RenderedTimeAgo({ time }: { time: string }) {
  const [timeAgo, setTimeAgo] = React.useState(0);

  useInterval(
    () => {
      const timeOnServer = new Date(time);
      setTimeAgo(differenceInMilliseconds(new Date(), timeOnServer));
    },
    timeAgo < 60000 ? 1000 : 60000,
  );

  return (
    <span
      className={clsx('text-sm text-zinc-500 transition-opacity duration-500', {
        'opacity-0': timeAgo < 1000,
        'opacity-100': timeAgo,
      })}
    >
      Rendered {ms(timeAgo)} ago
    </span>
  );
}
