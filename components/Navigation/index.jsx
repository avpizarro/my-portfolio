// import {Link} from 'react-scroll';
import styles from './index.module.scss';

const Navigation = () => {
  return (
    <nav>
      <div className={styles.navContainer}>
        <ul className={styles.navList}>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
