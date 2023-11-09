'use client';

import { useEffect, useId } from 'react';

import { useCartCount } from './cart-count-context';

export function OptimisticCartCount() {
  const id = useId();
  const inlineScript = `
    document.getElementById(${JSON.stringify(id)})
      .textContent = localStorage.getItem('cart-count')
  `;
  return (
    <>
      <span id={id} />
      <script dangerouslySetInnerHTML={{ __html: inlineScript }} />
    </>
  );
}

export function CartCount({ initialCartCount }: { initialCartCount: number }) {
  useEffect(() => {
    localStorage.setItem('cart-count', '' + initialCartCount);
  }, [initialCartCount]);
  const [count] = useCartCount(initialCartCount);
  return <span>{count}</span>;
}
