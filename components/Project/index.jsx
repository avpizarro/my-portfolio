import Link from 'next/link';
import Image from 'next/image';
import { Karla } from "next/font/google";

import styles from './index.module.scss';

import { AiFillGithub } from 'react-icons/ai';

const karla = Karla({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--karla-font',
});

const Project = ({ name, image, description, url, github, altText }) => {
  return (
    <article className={styles.project}>
      <Link href={url} className={styles.projectLink}>
        <Image
          className={styles.projectImage}
          src={image}
          alt={altText}
          width={340}
          height={217}
          priority
        />
      </Link>
      <Link href={url} className={styles.projectLink}>
        <h2 className={styles.projectTitle}>{name}</h2>
      </Link>
      <p className={styles.projectDescription}>{description}</p>
      <Link href={github}>
        <AiFillGithub className={styles.projectIcon} />
      </Link>
    </article>
  );
};

export default Project;
