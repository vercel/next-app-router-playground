'use client';
export function AddToCart({ initialCartCount }: { initialCartCount: number }) {

  return (
    <button
      className="relative w-full items-center space-x-2 rounded-lg bg-vercel-blue px-3 py-1  text-sm font-medium text-white hover:bg-vercel-blue/90 disabled:text-white/70"
    >
      Add to Cart
        <div
          className="absolute right-2 top-1.5 h-4 w-4 animate-spin rounded-full border-[3px] border-white border-r-transparent"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
    </button>
  );
}
