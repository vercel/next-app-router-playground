'use client';

import React from 'react';

const ClickCounter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100 hover:bg-gray-500 hover:text-white"
    >
      {count} Clicks
    </button>
  );
};

export default ClickCounter;
