'use client';

import { useCartCount } from './CartCountContext';

export function CartCount() {
  const [count] = useCartCount();
  return <span>{count}</span>;
}
