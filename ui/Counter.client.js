// TODO: Use this once https://vercel.slack.com/archives/C035J346QQL/p1657713568087989 is resolved

import React from 'react';

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(1);
  }, []);

  return (
    <div className="inline-flex space-x-1 rounded-xl border-2 border-dashed border-pink-500 p-1.5">
      <button
        className="h-3 w-8 rounded-lg bg-white/20 hover:bg-white/30"
        onClick={() => setCount(count + 1)}
      ></button>

      <div className="text-xs font-bold tabular-nums leading-none text-white">
        {count}
      </div>
    </div>
  );
};
