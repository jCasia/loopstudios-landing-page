import { FC } from 'react';
import styles from './styles/Nav.module.scss';
import hamburgerIcon from '../images/icon-hamburger.svg';
import logo from '../images/logo.svg';

const Nav: FC = () => {
  return (
    <nav>
      <div className={styles['nav-container']}>
        {/* mobile */}
        <img src={logo} alt='logo' className={styles.logo} />
        <button aria-label='menu'>
          <img src={hamburgerIcon} alt='menu icon' />
        </button>
        {/* desktop */}
      </div>
    </nav>
  );
};

export default Nav;
