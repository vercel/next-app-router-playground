import { RenderingInfo } from '#/ui/RenderingInfo';
import { getPostData } from '#/lib/post';
import Date from '#/components/date';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  // console.log('params =>  ', params)
  // const res = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  //   { cache: 'no-store' },
  // );
  // const data = (await res.json()) as { title: string; body: string };
  const postData = await getPostData(params.id)
  if(!postData){
    notFound()
  }

  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-4">
        <h1 className="truncate text-2xl font-medium capitalize ">
          {postData.title}
        </h1>
        <div className="text-blue-600">
          <Date dateString={postData.date} />
        </div>
        <article className="prose text-gray-50 prose-strong:text-amber-500">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
  
      </div>
      <div className="-order-1 col-span-full lg:order-none lg:col-span-2">
        <RenderingInfo type="ssr" />
      </div>
    </div>
  );
}
// export async function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' },{ id: '3' }]
// }
