import Link from 'next/link';
import Image from 'next/image';

import styles from './index.module.scss';

const Work = () => {
  return (
    <section className={styles.works}>
      <article className={styles.work}>
        <h2>Position</h2>
        <p className={styles.projectDescription}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          adipisci maiores reprehenderit aperiam eum ab dicta. Voluptate libero
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure qui,
          nesciunt labore quibusdam cumque dicta quo, necessitatibus quia
          deserunt quasi obcaecati corrupti, quidem voluptates repellat
          asperiores facere non iusto culpa!
        </p>
        <div className={styles.timeline}></div>
      </article>
    </section>
  );
};

export default Work;
