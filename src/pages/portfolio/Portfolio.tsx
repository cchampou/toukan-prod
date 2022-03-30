import React from 'react';
import { ContentContainer } from '../homepage/styles';
import r4d from '../../assets/images/thumbnails/r4d_colo.jpg';
import confluence from '../../assets/images/thumbnails/conflu.jpg';
import dji from '../../assets/images/thumbnails/dji_insta.jpg';
import ronin from '../../assets/images/thumbnails/ronin.jpg';
import valmy from '../../assets/images/thumbnails/valmy.jpg';
import './style.css';

const images = [
  {
    url: r4d,
    size: 'wide',
  },
  {
    url: confluence,
    size: 'big',
  },
  {
    url: dji,
    size: 'tall',
  },
  {
    url: ronin,
    size: '',
  },
  {
    url: valmy,
    size: 'wide',
  },
];

function Portfolio() {
  return (
    <ContentContainer>
      <div className="grid-wrapper">
        {images.map(({ url, size }) => (
          <div className={size}>
            <img src={url} alt={url} />
          </div>
        ))}
      </div>
    </ContentContainer>
  );
}

export default Portfolio;
