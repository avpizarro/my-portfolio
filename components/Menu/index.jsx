import cl from 'classnames';

import Link from 'next/link';

import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';

import { RiMastodonFill } from 'react-icons/ri';

import styles from './index.module.scss';

const Menu = ({onClick , className, open}) => {
  return (
    <div className={cl(styles.menu, className)}>
      <button className={styles.menuButton} onClick={onClick}>
        <svg
          id="menu"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          viewBox="0 0 316.79 281.9"
        >
          <title>Menu</title>
          <path d="m0,248.3h364.43v33.6H0v-33.6Z" />
          <path d="m0,124.15h364.43v33.6H0v-33.6Z" />
          <path d="m0,0h364.43v33.6H0V0Z" />
        </svg>
      </button>
      <div>
        <ul>
          <li className={styles.projects}>PROJECTS</li>
          {/* <li className={styles.work}>WORK</li> */}
          <Link className={styles.menuLink} href={'https://drive.google.com/file/d/1IT09XhDUAB1AUXI1qdZhFZEHbKfB9Ap3/view?usp=sharing'}>
          <li className={styles.resume}>RESUME</li>
          </Link>
        </ul>
      </div>
      <div className={styles.menuMedia}>
        <Link href='https://github.com/avpizarro'className={styles.menuIcon}>
          <AiOutlineGithub className={styles.roundIcon}/>
        </Link>
        <Link href='https://www.linkedin.com/in/avpizarro' className={styles.menuIcon}>
          <AiOutlineLinkedin className={styles.linkedIn} />
        </Link>
        <Link href='https://twitter.com/avaldespizarro' className={styles.menuIcon}>
          <AiOutlineTwitter className={styles.roundIcon}/>
        </Link>
        <Link href='https://me.dm/@avpizarro' className={styles.menuIcon}>
          <RiMastodonFill className={styles.roundIcon}/>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
