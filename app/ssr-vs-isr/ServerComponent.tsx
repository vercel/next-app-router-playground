async function ssrFetchData() {
  // let postId = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  //   await new Promise((resolve) => setTimeout(resolve, 10));

  //   return new Date();
  const res = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new',
    { next: { revalidate: 10 } },
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

export default async function ServerComponent() {
  let data = await ssrFetchData();

  return <p className="text-white">SSR Server component: {data}</p>;
}
