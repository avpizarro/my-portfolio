// import {Link} from 'react-scroll';
"use client"
import styles from './index.module.scss';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import Lenis from "lenis";
// Import the scroll 
import { useSmoothScroller } from '../ScrollContext';

const Navigation = () => {

  const scrollerRef = useSmoothScroller();

  useEffect(() => {
    scrollerRef?.on('scroll', e => {
      console.log(e);
    })

  }, [scrollerRef]);

  return (
    <nav>
      <div className={styles.navContainer}>
        <ul className={styles.navList}>
          <li><Link href="#about" className={styles.navListLi} onClick={() => scrollerRef.scrollTo('#about')}>About</Link></li>
          <li><Link href="#contact" className={styles.navListLi} onClick={() => scrollerRef.scrollTo('#contact')}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
