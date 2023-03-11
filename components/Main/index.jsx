import styles from './index.module.scss';

import {About, Work, Technologies, Contact, BookInterview } from '../index';

import ProjectsContainer from '../ProjectsContainer';

const Main = ({ children }) => {
  return (
    <div className={styles.main}>
      <ProjectsContainer children={children}/>
      <BookInterview />
      <About />
      <Contact />
      <Technologies />
    </div>
  );
};

export default Main;
