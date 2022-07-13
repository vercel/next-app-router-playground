import { getCategories } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';

export const getServerSideProps = () => {
  return {
    props: { categories: getCategories(), date: new Date().toISOString() },
  };
};

export default function Page(props: any) {
  return (
    <Boundary>
      <div className="text-xl font-medium text-white">sdsd{props.date}</div>
    </Boundary>
  );
}
