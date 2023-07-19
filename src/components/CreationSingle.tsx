import { FC } from 'react';
import { CreationSingleProps } from '../interfaces/CreationSingleProps';
import styles from './styles/CreationSingle.module.scss';

const CreationSingle: FC<CreationSingleProps> = ({
  image,
  text,
  imageDesk,
}) => {
  return (
    <a className={styles['creation-wrapper']} href='#'>
      <div className={styles.darken}></div>
      <div className={styles['image-container']}>
        <img src={image} alt={`${text} image`} className={styles.imgPhone} />
        <img
          src={imageDesk}
          alt={`${text} image`}
          className={styles.imgDesktop}
        />
      </div>
      <h3>{text}</h3>
    </a>
  );
};

export default CreationSingle;
