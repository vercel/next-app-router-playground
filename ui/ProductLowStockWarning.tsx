export const ProductLowStockWarning = ({ stock }: { stock: number }) => {
  if (stock > 3) {
    return null;
  }

  if (stock === 0) {
    return <div className="text-sm text-vercel-pink">Out of stock</div>;
  }

  return (
    <div className="text-sm text-vercel-pink">Only {stock} left in stock</div>
  );
};
