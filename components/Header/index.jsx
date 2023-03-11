import cl from 'classnames';
import styles from './index.module.scss';

import Navigation from '../Navigation';
import Menu from '../Menu';

const Header = ( { onClick, className, className1, className3 }) => {

  return (
    <div className={className3} >
      <div className={cl(styles.siteBranding, className1)}>
        <div className={styles.logoContainer}>
          <svg
            className={styles.scalingsvg}
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-20 0 100 100"
            width="70"
            height="130"
          >
            <path d="m6.74,6.74c0-3.72,3.02-6.74,6.74-6.74h40.45c3.72,0,6.74,3.02,6.74,6.74v26.96h-6.74V6.74H13.48v26.96h-6.74V6.74ZM0,39.1c0-1.12.91-2.02,2.02-2.02h63.37c1.12,0,2.02.91,2.02,2.02,0,4.47-3.62,8.09-8.09,8.09H8.09c-4.47,0-8.09-3.62-8.09-8.09Zm29.6-20.45l-3.27,3.27,3.27,3.27c.99.99.99,2.59,0,3.57s-2.59.99-3.57,0l-5.06-5.06c-.99-.99-.99-2.59,0-3.57l5.06-5.06c.99-.99,2.59-.99,3.57,0s.99,2.59,0,3.57h0Zm11.8-3.57l5.06,5.06c.99.99.99,2.59,0,3.57l-5.06,5.06c-.99.99-2.59.99-3.57,0s-.99-2.59,0-3.57l3.27-3.27-3.27-3.27c-.99-.99-.99-2.59,0-3.57s2.59-.99,3.57,0h0Z" />
          </svg>
        </div>
        <h1 className={styles.siteTitle}>ALEJANDRA <span className={styles.surname}>VALDES</span></h1>
      </div>
      <Navigation />
      <Menu onClick={onClick} className={className}/>
    </div>
  );
};

export default Header;
