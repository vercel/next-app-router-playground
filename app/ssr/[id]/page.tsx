async function fetchData(params: { id: string }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { cache: 'no-store' },
  );
  const data = await res.json();
  return data;
}

export default async function Page({
  params,
}: {
  params?: any;
  children?: React.ReactNode;
}) {
  const data = await fetchData(params);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-medium text-gray-200">{data.title}</h1>
      <p className="font-medium text-gray-500">{data.body}</p>
    </div>
  );
}
