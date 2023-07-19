import { FC } from 'react';
import styles from './styles/Header.module.scss';
import Nav from '../components/Nav';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Nav />
        <div className={styles['content-wrapper']}>
          <h1>Immersive Experiences That Deliver</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
