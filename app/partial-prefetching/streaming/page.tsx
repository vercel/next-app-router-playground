import { PageBody } from '../_components/page-body';

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  return (
    <PageBody
      page="streaming"
      linkLabel="<Link>"
      searchParams={searchParams}
      intro="App Shell only. All four sections stream in after the click."
    />
  );
}
