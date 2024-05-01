export default function Page({
  params: { catchAll },
}: {
  params: {
    catchAll: string[];
  };
}) {
  return (
    <div className="flex gap-4">
      <div>Home</div>
      {catchAll.map((x, i) => (
        <div key={i} className="capitalize">
          {x}
        </div>
      ))}
    </div>
  );
}
