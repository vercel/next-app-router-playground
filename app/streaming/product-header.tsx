import Image from 'next/image';

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
  let title = await delay(800);
  return (
    <section>
      <div className="mb-2 text-xl font-bold">{title}</div>
      <Image src="/q-zip.png" alt="Next.js Hoodie" width={500} height={90} />
    </section>
  );
}
