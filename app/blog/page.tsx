// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
// import { AppProps } from 'next/app';
import utilStyles from '#/styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '#/lib/post';
import Date from '#/components/date';

export default function Page() {
  // {
  //   allPostsData
  // }: {
  //   allPostsData: {
  //     date: string
  //     title: string
  //     id: string
  //   }[]
  // }

  // This request should be cached until manually invalidated.
  // Similar to `getStaticProps`.
  // `force-cache` is the default and can be omitted.
  // const staticData = await fetch(`https://...`, { cache: 'force-cache' });

  // This request should be refetched on every request.
  // Similar to `getServerSideProps`.
  // const dynamicData = await fetch(`https://...`, { cache: 'no-store' });

  // This request should be cached with a lifetime of 10 seconds.
  // Similar to `getStaticProps` with the `revalidate` option.
  // const revalidatedData = await fetch(`https://...`, {
  //   next: { revalidate: 10 },
  // })
  const allPostsData = getSortedPostsData();
  // 无法在父布局与其子布局之间传递数据。但是，您可以在一条路由中多次获取相同的数据，
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-100">
        服务端渲染-博客
      </h1>

      <div className="space-y-4">
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}> */}
      <section className='text-xl pt-1'>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
           <li className="mb-5" key={id}>
           <Link href={`/blog/${id}`}>{title}</Link>
           <br />
           <small className="text-gray-500">
             <Date dateString={date} />
           </small>
         </li>
          ))}
        </ul>
      </section>
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const allPostsData = getSortedPostsData();

//   return { props: { allPostsData } };
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   const allPostsData = await getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

// export async function getServerSideProps() {
//   const res = await fetch(`https://...`);
//   const projects = await res.json();

//   return { props: { projects } };
// }
