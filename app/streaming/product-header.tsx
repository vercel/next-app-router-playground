import { experimental_use as use } from 'react';
import Image from 'Next/Image';
async function delay(ms: number): Promise<string> {
  let title = 'Next.js Quarter Zip';
  await new Promise((res) =>
    setTimeout(() => {
      res(title);
    }, ms),
  );
  return title;
}

export default function ProductHeader() {
  let title = use(delay(800));
  return (
    <section>
      <div className="mb-2 text-xl font-bold">{title}</div>
      <Image src="/q-zip.png" alt="Next.js Hoodie" width={1000} height={90} />
    </section>
  );
}
