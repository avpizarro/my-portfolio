// import {Link} from 'react-scroll';
import styles from './index.module.scss';

const Navigation = () => {
  return (
    <nav>
      <div className={styles.navContainer}>
        <ul className={styles.navList}>
          <li><Link activeClass="active" to="about" spy={true} smooth={true}>About</Link></li>
          <li><Link activeClass="active" to="contact" spy={true} smooth={true}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
