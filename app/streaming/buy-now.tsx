async function delay(ms: number): Promise<string> {
  let price = '$80.00';
  await new Promise((res) =>
    setTimeout(() => {
      res(price);
    }, ms),
  );
  return price;
}

export default async function ProductHeader() {
  let price = await delay(200);
  return (
    <section>
      <div className="space-y-4 rounded-md bg-zinc-900 p-4">
        <button className="w-full rounded-md bg-white px-2 py-3 text-black">
          Buy Now
        </button>
        <div className="text-3xl font-medium text-zinc-100">{price}</div>
      </div>
    </section>
  );
}
