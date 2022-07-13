import { useState, useEffect } from 'react';

export default function ClientCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(1);
  }, []);

  return (
    <>
      <h3>Count: {count}</h3>
      <button
        className="rounded bg-black px-8 py-2 text-white"
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>
    </>
  );
}
