import { FC } from 'react';
import logo from '../images/logo.svg';
import styles from './styles/Footer.module.scss';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

const links = ['About', 'Careers', 'Events', 'Products', 'Support'];
const socials = [facebook, twitter, pinterest, instagram];

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <img src={logo} alt='logo' className={styles.logo} />
        <div className={styles['links-container']}>
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
        <div className={styles['social-container']}>
          <ul>
            <li></li>
            {socials.map((item, index) => {
              return (
                <li key={index}>
                  <a href='#'>
                    <img src={item} alt={item} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <p> &copy; 2023 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
