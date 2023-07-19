import { FC } from 'react';
import styles from './styles/Nav.module.scss';
import hamburgerIcon from '../images/icon-hamburger.svg';
import logo from '../images/logo.svg';

const links = ['About', 'Careers', 'Events', 'Products', 'Support'];

const Nav: FC = () => {
  return (
    <nav>
      <div className={styles['nav-container']}>
        {/* mobile */}
        <img src={logo} alt='logo' className={styles.logo} />
        <button aria-label='menu' type='button'>
          <img src={hamburgerIcon} alt='menu icon' />
        </button>
        {/* desktop */}
        <ul>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a href='#'>{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
