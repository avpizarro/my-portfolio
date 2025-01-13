import cl from 'classnames';
import { Karla } from "next/font/google"

import styles from './index.module.scss';

const karla = Karla({ weight: ['400', '700'], subsets: ['latin'], variable: '--karla-font' })

const ProjectsContainer = ({ children }) => {

  return (
    <section className={cl(styles.projects, karla.variable)}>
      {children}
    </section>
  );
};

export default ProjectsContainer;
