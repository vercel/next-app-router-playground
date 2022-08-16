import { Boundary } from '@/ui/Boundary.server';
import styles from './styles.module.css';

const SkeletonCard = () => (
  <div className={styles.skeleton}>
    <div className={styles['skeleton-img']} />
    <div className={styles['skeleton-btn']} />
    <div className={styles['skeleton-line-one']} />
    <div className={styles['skeleton-line-two']} />
  </div>
);

export default function Page() {
  return (
    <Boundary labels={['Styled with CSS Modules']}>
      <div className={styles.container}>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </Boundary>
  );
}
