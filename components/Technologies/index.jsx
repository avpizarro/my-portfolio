import Illustrator from '../TechStack/Illustrator';
import Bootstrap5 from '../TechStack/Bootstrap5';
import Css from '../TechStack/Css';
import Figma from '../TechStack/Figma';
import Html from '../TechStack/Html';
import Jquery from '../TechStack/Jquery';
import Js from '../TechStack/Js';
import Nextjs from '../TechStack/Nextjs';
import Nodejs from '../TechStack/Nodejs';
import Npm from '../TechStack/Npm';
import Photoshop from '../TechStack/Photoshop';
import Python from '../TechStack/Python';
import Reactjs from '../TechStack/Reactjs';
import Sass from '../TechStack/Sass';
import Visualstudio from '../TechStack/Visualstudio';


import styles from './index.module.scss';

const Technologies = () => {
  return (
    <div className={styles.techsContainer}>
      <div className={styles.techs}>
        <Illustrator />
        <Bootstrap5 />
        <Css />
        <Html />
        <Figma />
        <Jquery />
        <Js />
        <Nextjs />
        <Nodejs />
        <Npm />
        <Photoshop />
        <Python />
        <Reactjs />
        <Sass />
        <Visualstudio />
      </div>
    </div>
  );
};

export default Technologies;
