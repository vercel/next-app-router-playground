// export const revalidate = 60;

// async function genNumber() {
//   return Math.random();
// }

// export default async function Page() {
//   let i = await genNumber();

//   return <p>The number is: {i}</p>;
// }

import ServerComponent from './ServerComponent';

async function ssrFetchData() {
  console.log('testing this!');
  // let postId = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  //   await new Promise((resolve) => setTimeout(resolve, 10));

  //   return new Date();
  const res = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new',
    // { next: { revalidate: 30 } },
    { cache: 'no-store' },
  );
  const data = await res.json();
  // const res = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${postId}`,
  //   // {
  //   //   cache: 'no-store',
  //   // },
  // );
  // const data = await res.json();
  return data;
}

// export default async function Page({ searchParams }: { searchParams: any }) {
//   console.log({ searchParams });
export default async function Page() {
  let int = await ssrFetchData();

  return (
    <div className="space-y-16">
      <p className="text-white">The int is {int}</p>
      {/* <Link
        className="text-white"
        href={`${searchParams.ssr ? '/ssr-vs-isr' : '/ssr-vs-isr?ssr=1'}`}
      >
        Toggle server component
      </Link> */}

      {/* {searchParams.ssr && <ServerComponent />} */}
    </div>
  );
}
