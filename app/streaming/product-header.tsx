async function delay(ms: number): Promise<string> {
  let title = 'Next.js Quarter Zip';
  await new Promise((res) =>
    setTimeout(() => {
      res(title);
    }, ms),
  );
  return title;
}

export default async function ProductHeader() {
  let title = await delay(500);
  return (
    <section>
      <div className="mb-2 font-bold">{title}</div>
      <img
        src="/q-zip.png"
        alt="Next.js Hoodie"
        width={500}
        height={90}
        className="h-[7.5rem] w-full object-contain"
      />
    </section>
  );
}
