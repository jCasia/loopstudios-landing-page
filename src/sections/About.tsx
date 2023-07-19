import { FC } from 'react';
import aboutImg from '../images/mobile/image-interactive.jpg';
import styles from './styles/About.module.scss';

const About: FC = () => {
  return (
    <section className={styles.about}>
      <img src={aboutImg} alt='about image' />
      <div className={styles['about-content']}>
        <h2>The Leader in interactive vr</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default About;
