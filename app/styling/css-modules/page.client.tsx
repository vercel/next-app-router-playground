import styles from './styles.module.css';

export default function Page() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.text}>css</div>
        <div className={styles.text}>modules</div>
      </div>
    </div>
  );
}
