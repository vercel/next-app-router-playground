import { useState, useEffect } from 'react';

export default function ClientCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(1);
  }, []);

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
}
