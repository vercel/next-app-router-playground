import { Boundary } from '@/ui/Boundary.server';

export async function getServerSideProps() {
  return {
    props: {
      date: new Date().toISOString(),
    },
  };
}

export default function Page(props: any) {
  return (
    <Boundary>
      <div className="text-xl font-medium text-white">
        1. Select a category.
      </div>
    </Boundary>
  );
}
