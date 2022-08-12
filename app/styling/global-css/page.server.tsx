import { Boundary } from '@/ui/Boundary.server';
import './styles.css';

const SkeletonCard = () => (
  <div className="skeleton">
    <div className="skeleton-img" />
    <div className="skeleton-btn" />
    <div className="skeleton-line-one" />
    <div className="skeleton-line-two" />
  </div>
);

export default function Page() {
  return (
    <Boundary labels={['Styled with a global css stylesheet']}>
      <div className="container">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </Boundary>
  );
}
