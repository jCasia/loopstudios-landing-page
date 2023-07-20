import { FC, useState } from 'react';
import styles from './styles/Nav.module.scss';
import hamburgerIcon from '../images/icon-hamburger.svg';
import logo from '../images/logo.svg';
import HamburgerMenu from './HamburgerMenu';

const links = ['About', 'Careers', 'Events', 'Products', 'Support'];

const Nav: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isdisabled, setIsDisabled] = useState(false);

  const openHandler = (): void => {
    setIsMenuOpen(true);
  };

  const closeHandler = (): void => {
    setIsMenuOpen(false);
    setIsDisabled(true);
    //needed to disable hamburger button for a few seconds when it closes, as stagger animation would break if clicked too fast.
    setTimeout(() => {
      setIsDisabled(false);
    }, 900);
  };

  return (
    <nav>
      <div className={styles['nav-container']}>
        {/* mobile */}
        <img src={logo} alt='logo' className={styles.logo} />
        <button
          aria-label='menu'
          type='button'
          onClick={openHandler}
          disabled={isdisabled}
        >
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

        <HamburgerMenu
          isMenuOpen={isMenuOpen}
          links={links}
          closeHandler={closeHandler}
        />
      </div>
    </nav>
  );
};

export default Nav;
