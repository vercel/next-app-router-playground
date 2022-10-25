import { experimental_use as use } from 'react';
async function delay(ms: number): Promise<string> {
  let price = '$80.00';
  await new Promise((res) =>
    setTimeout(() => {
      res(price);
    }, ms),
  );
  return price;
}

export default function ProductHeader() {
  let price = use(delay(1000));
  return (
    <section>
      <div className="p-4 space-y-4 rounded-md bg-zinc-900">
        <div className="text-3xl font-medium text-zinc-100">{price}</div>
        <button className="w-full px-2 py-3 text-black bg-white rounded-md">
          Buy Now
        </button>
      </div>
    </section>
  );
}
