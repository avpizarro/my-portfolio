import styles from './index.module.scss';
import Image from 'next/image';
import profile from '../../images/profilePicture.jpg';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div>
        <Image
          className={styles.aboutImage}
          src={profile}
          alt="person climbing"
          width={200}
          height={'auto'}
          priority
        />
      </div>
      <div className={styles.aboutText}>
        <p>
          Junior Full Stack Developer with experience in production, product
          development and logistics.
        </p>
      </div>
    </section>
  );
};

export default About;
