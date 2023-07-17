import img1 from './images/mobile/image-deep-earth.jpg';
import img2 from './images/mobile/image-night-arcade.jpg';

interface DataInterface {
  id: string;
  image: string;
  text: string;
}

export const data: Array<DataInterface> = [
  {
    id: '1',
    image: img1,
    text: 'Deep Earth',
  },
  {
    id: '2',
    image: img2,
    text: 'Night Arcade',
  },
];
