import { nanoid } from 'nanoid';
import img1 from './images/mobile/image-deep-earth.jpg';
import img2 from './images/mobile/image-night-arcade.jpg';
import img3 from './images/mobile/image-soccer-team.jpg';
import img4 from './images/mobile/image-grid.jpg';
import img5 from './images/mobile/image-from-above.jpg';
import img6 from './images/mobile/image-pocket-borealis.jpg';
import img7 from './images/mobile/image-curiosity.jpg';
import img8 from './images/mobile/image-fisheye.jpg';

import img1desk from './images/desktop/image-deep-earth.jpg';
import img2desk from './images/desktop/image-night-arcade.jpg';
import img3desk from './images/desktop/image-soccer-team.jpg';
import img4desk from './images/desktop/image-grid.jpg';
import img5desk from './images/desktop/image-from-above.jpg';
import img6desk from './images/desktop/image-pocket-borealis.jpg';
import img7desk from './images/desktop/image-curiosity.jpg';
import img8desk from './images/desktop/image-fisheye.jpg';

interface DataInterface {
  id: string;
  image: string;
  imageDesk: string;
  text: string;
}

export const data: Array<DataInterface> = [
  {
    id: nanoid(),
    image: img1,
    imageDesk: img1desk,
    text: 'Deep Earth',
  },
  {
    id: nanoid(),
    image: img2,
    imageDesk: img2desk,
    text: 'Night Arcade',
  },
  {
    id: nanoid(),
    image: img3,
    imageDesk: img3desk,
    text: 'Soccer Team VR',
  },
  {
    id: nanoid(),
    image: img4,
    imageDesk: img4desk,
    text: 'The Grid',
  },
  {
    id: nanoid(),
    image: img5,
    imageDesk: img5desk,
    text: 'From Up Above Vr',
  },
  {
    id: nanoid(),
    image: img6,
    imageDesk: img6desk,
    text: 'Pocket Borealis',
  },
  {
    id: nanoid(),
    image: img7,
    imageDesk: img7desk,
    text: 'The Curiosity',
  },
  {
    id: nanoid(),
    image: img8,
    imageDesk: img8desk,
    text: 'Make it FishEye',
  },
];
