import styles from './index.module.scss';

import { About, Technologies, Contact, BookInterview } from '../index';

import ProjectsContainer from '../ProjectsContainer';

const Main = ({ children }) => {
  return (
    <div className={styles.main}>
      <ProjectsContainer>{children}</ProjectsContainer>
      <BookInterview />
      <About />
      <Contact />
      <Technologies />
    </div>
  );
};

export default Main;
