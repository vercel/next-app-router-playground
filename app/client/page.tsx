import { TabGroup } from '#/ui/TabGroup';

function Page() {
  return (
    <div className="flex flex-col gap-5 text-center">
      <TabGroup
        path="/client"
        items={[
          {
            text: 'Home',
          },
          {
            text: 'Fetching',
            slug: '1',
          },
        ]}
      />
      <p>
        This example shows how you can fetch data synchronously on the client,
        in a similar manner to async/await in server components.
      </p>
    </div>
  );
}

export default Page;
