import { FC } from 'react';
import styles from './styles/Creations.module.scss';
import { data } from '../datacreation';
import CreationSingle from '../components/CreationSingle';

const Creations: FC = () => {
  return (
    <section className={styles.creations}>
      <h2>Our creations</h2>
      <div className={styles['creations-container']}>
        {data.map((item) => {
          return <CreationSingle {...item} key={item.id} />;
        })}
      </div>
      <a href='#' className={styles.seeAll}>
        See all
      </a>
    </section>
  );
};

export default Creations;
