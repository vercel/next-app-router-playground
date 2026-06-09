import { PageBody } from '../_components/page-body';

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  return (
    <PageBody
      page="cached"
      linkLabel="<Link prefetch={true}>"
      searchParams={searchParams}
      intro="App Shell + static cached content. ?id-keyed cache, private cache, and uncached still stream."
    />
  );
}
