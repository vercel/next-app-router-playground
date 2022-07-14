import React from 'react';

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(1);
  }, []);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="group inline-flex space-x-1 rounded-lg border border-dashed border-blue-500 p-1.5"
    >
      <div className="h-3 w-8 rounded-lg bg-zinc-600 group-hover:bg-zinc-400"></div>

      <div className="text-xs font-bold tabular-nums leading-none text-white">
        {count}
      </div>
    </button>
  );
};

export default Counter;
