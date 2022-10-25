import { use } from 'react';

async function delay(ms: number): Promise<string> {
  const msg =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Tortor at auctor urna nunc id cursus metus aliquam. Tortor at risus viverra adipiscing at in tellus. Id leo in vitae turpis massa sed. In massa tempor nec feugiat nisl pretium. Et tortor consequat id porta nibh venenatis cras sed felis.';
  await new Promise((res) =>
    setTimeout(() => {
      res(msg);
    }, ms),
  );
  return msg;
}

export default function Description() {
  let msg = use(delay(1000));
  return (
    <section>
      <div>{msg}</div>
    </section>
  );
}
