import { Counter } from '@/ui/Counter.client';
import { SkeletonCard } from '@/ui/SkeletonCard.server';

export async function getServerSideProps() {
  return {
    props: {
      date: new Date().toISOString(),
    },
  };
}

export default function Page(props: any) {
  return <div className="text-xl font-medium text-white">{props.date}</div>;
}
