import { experimental_use as use } from 'react';

async function delay(ms: number): Promise<string> {
  const msg =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet sed euismod nisi porta lorem mollis aliquam ut.';
  await new Promise((res) =>
    setTimeout(() => {
      res(msg);
    }, ms),
  );
  return msg;
}

export default function Description() {
  let msg = use(delay(500));
  return (
    <section>
      <div>{msg}</div>
    </section>
  );
}
