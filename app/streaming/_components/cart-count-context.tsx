'use client';

import React, { useState } from 'react';

const CartCountContext = React.createContext<
  | [null | number, React.Dispatch<React.SetStateAction<null | number>>]
  | undefined
>(undefined);

export function CartCountProvider({ children }: { children: React.ReactNode }) {
  const [optimisticCartCount, setOptimisticCartCount] = useState<null | number>(
    null,
  );

  return (
    <CartCountContext.Provider
      value={[optimisticCartCount, setOptimisticCartCount]}
    >
      {children}
    </CartCountContext.Provider>
  );
}

export function useCartCount(
  initialCount: number,
): [null | number, React.Dispatch<React.SetStateAction<null | number>>] {
  const context = React.useContext(CartCountContext);
  if (context === undefined) {
    throw new Error('useCartCount must be used within a CartCountProvider');
  }
  if (context[0] === null) {
    return [initialCount, context[1]];
  }
  return context;
}
