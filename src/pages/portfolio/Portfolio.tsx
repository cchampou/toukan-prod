import React from 'react';
import { ContentContainer } from '../homepage/styles';
import r4d from '../../assets/images/thumbnails/r4d_colo.jpg';
import confluence from '../../assets/images/thumbnails/conflu.png';
import dji from '../../assets/images/thumbnails/dji_insta.jpg';
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
