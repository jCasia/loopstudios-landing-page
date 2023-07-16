import { FC } from 'react';
import styles from './styles/Header.module.scss';
import Nav from '../components/Nav';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Nav />
      <div className={styles['content-wrapper']}>
        <h1>Emmersive Experiences That Delivers</h1>
      </div>
    </header>
  );
};

export default Header;
