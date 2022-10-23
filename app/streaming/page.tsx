import { SkeletonCard } from '@/ui/SkeletonCard';
import { experimental_use as use } from 'react';

async function delay(msg: string, ms: number): Promise<string> {
  await new Promise((res) =>
    setTimeout(() => {
      res(msg);
    }, ms),
  );
  return msg;
}

export default function Page() {
  // use(delay('whatever', 500));

  const val = 'test'; //useContext(serverContext);

  return (
    <>
      <div className="space-y-4">
        <div className="text-xl font-medium text-zinc-500">Product</div>
        <div className="flex space-x-6">
          <div className="space-y-4">
            <SkeletonCard />
            <div>
              <div className="text-xl font-medium text-zinc-500">
                Description
              </div>
              <div className="text-zinc-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Imperdiet sed euismod nisi porta lorem mollis aliquam ut.
                Interdum posuere lorem ipsum dolor sit amet consectetur
                adipiscing. Tortor at auctor urna nunc id cursus metus aliquam.
                Tortor at risus viverra adipiscing at in tellus. Id leo in vitae
                turpis massa sed. In massa tempor nec feugiat nisl pretium. Et
                tortor consequat id porta nibh venenatis cras sed felis. Ut
                aliquam purus sit amet luctus venenatis lectus. Tellus mauris a
                diam maecenas sed enim. Nisl vel pretium lectus quam id leo.
                Mattis vulputate enim nulla aliquet porttitor lacus luctus
                accumsan tortor. Metus aliquam eleifend mi in nulla posuere
                sollicitudin.
              </div>
            </div>
          </div>
          <div className="min-w-[250px]">
            <div className="space-y-4 rounded-md bg-zinc-900 p-4">
              <div className="text-3xl font-medium text-zinc-100">$76.99</div>
              <button className="w-full rounded-md bg-white px-2 py-3 text-black">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default function Page() {
//   return (
//     <div className="space-y-4">
//       <div className="text-xl font-medium text-zinc-500">Home</div>
//       <div className="text-white">Notes</div>
//       <ul className="list-disc space-y-2 pl-4 text-sm text-zinc-300">
//         <li>
//           This example has an artificial delay when "fetching" data for each
//           category page.{' '}
//           <span className="font-medium text-white">`loading.js`</span> is used
//           to show a loading skeleton immediately while the category page loads.
//         </li>
//         <li>
//           Shared layouts remain interactive while nested layouts or pages load.
//           Try clicking the counter while{' '}
//           <span className="font-medium text-white">children</span> load.
//         </li>
//         <li>
//           Navigation is interruptible. Try navigating to one category, then
//           clicking a second category before the first one has loaded.
//         </li>
//       </ul>
//     </div>
//   );
// }
