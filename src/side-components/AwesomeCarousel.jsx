import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import BuffSpyVid from '../assets/SPOR_original.mp4'

const slider = (
  <AwesomeSlider
    media={[
      {
        source: BuffSpyVid,
      },
      {
        source: '/path/to/image-1.png',
      },
      {
        source: '/path/to/image-2.png',
      },
    ]}
  />
);

export default AwesomeSlider