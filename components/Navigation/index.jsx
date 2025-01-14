// import {Link} from 'react-scroll';
import styles from './index.module.scss';
import Link from 'next/link';
import { useEffect } from 'react';

const Navigation = () => {

  useEffect(() => {
    console.log("I should be back to 0")
    // Reset scroll on page reload
    if (window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <nav>
      <div className={styles.navContainer}>
        <ul className={styles.navList}>
          <li><Link href="#about" className={styles.navListLi} scroll={false}>About</Link></li>
          <li><Link href="#contact" className={styles.navListLi} scroll={false}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
