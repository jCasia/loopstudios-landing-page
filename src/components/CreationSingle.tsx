import { FC } from 'react';
import { CreationSingleProps } from '../interfaces/CreationSingleProps';
import styles from './styles/CreationSingle.module.scss';

const CreationSingle: FC<CreationSingleProps> = ({ image, text }) => {
  return (
    <div className={styles['creation-wrapper']}>
      <div className={styles['image-container']}>
        <img src={image} alt='l' />
      </div>

      <h3>{text}</h3>
    </div>
  );
};

export default CreationSingle;
