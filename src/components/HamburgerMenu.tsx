import { FC } from 'react';
import styles from './styles/HamburgerMenu.module.scss';
import logo from '../images/logo.svg';
import close from '../images/icon-close.svg';
import { HamburgerMenuProps } from '../interfaces/HamburgerMenuProps';

const HamburgerMenu: FC<HamburgerMenuProps> = ({
  isMenuOpen,
  closeHandler,
  links,
}) => {
  return (
    <div className={isMenuOpen ? `${styles.menu} ${styles.show}` : styles.menu}>
      <div className={styles['logo-close-container']}>
        <img src={logo} />
        <button aria-label='close' onClick={closeHandler} type='button'>
          <img src={close} alt='close' />
        </button>
      </div>
      <ul>
        {links.map((item, index) => {
          return (
            <li
              key={index}
              className={
                isMenuOpen ? `${styles.down} ${styles.links}` : styles.links
              }
            >
              <a href='#' onClick={closeHandler}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
