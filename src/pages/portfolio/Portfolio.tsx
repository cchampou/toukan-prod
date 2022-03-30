import React, { useState } from 'react';
import { useKeyPress } from 'react-alt';
import { useClickOutside } from '@mantine/hooks';
import { ContentContainer } from '../homepage/styles';
import r4d from '../../assets/images/thumbnails/r4d_colo.jpg';
import confluence from '../../assets/images/thumbnails/conflu.jpg';
import dji from '../../assets/images/thumbnails/dji_insta.jpg';
import ronin from '../../assets/images/thumbnails/ronin.jpg';
import valmy from '../../assets/images/thumbnails/valmy.jpg';
import fourAxis from '../../assets/images/thumbnails/4axis.jpg';
import baston from '../../assets/images/thumbnails/baston.jpg';
import ultimae from '../../assets/images/thumbnails/ultimae.jpg';
import r4dMonitor from '../../assets/images/thumbnails/r4d_monitor.jpg';
import './style.css';

const images = [
  {
    url: r4d,
    size: 'wide',
    alt: 'R4D',
    youtubeId: 'M9_OnNx3uIs',
  },
  {
    url: confluence,
    size: 'big',
    alt: 'Confluence',
    youtubeId: 'h7y2tFtGA0A',
  },
  {
    url: dji,
    size: 'tall',
    alt: 'DJI Insta',
  },
  {
    url: ronin,
    size: 'wide',
    alt: 'Ronin',
    youtubeId: 'Y-rQHQH2wAM',
  },
  {
    url: valmy,
    size: 'big',
    alt: 'Valmy drone',
    youtubeId: '9R7iwI00xek',
  },
  {
    url: fourAxis,
    size: 'tall',
    alt: 'Ronin 4 axes',
    youtubeId: 'OOPGJtov9xw',
  },
  {
    url: baston,
    size: 'big',
    alt: 'Baston',
    youtubeId: 'eCSMbACyYQg',
  },
  {
    url: r4dMonitor,
    size: 'tall',
    alt: 'R4D Monitor',
    youtubeId: 'zgy5Qskmjpw',
  },
  {
    url: ultimae,
    size: 'big',
    alt: 'Ultimae Live',
    youtubeId: 'LV7uS3w3lGk',
  },
];

function Portfolio() {
  const [youtube, setYoutube] = useState<string>();
  useKeyPress(() => setYoutube(undefined), 'Escape');
  const ref = useClickOutside(() => setYoutube(undefined));

  return (
    <ContentContainer>
      {youtube && <div id="backdrop" />}
      {youtube && (
        <div id="cinema" ref={ref}>
          <iframe
            src={`https://www.youtube.com/embed/${youtube}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <div className="grid-wrapper">
        {images.map(({ url, size, alt, youtubeId }) => (
          <div className={size} onClick={() => setYoutube(youtubeId)}>
            <img src={url} alt={alt} />
          </div>
        ))}
      </div>
    </ContentContainer>
  );
}

export default Portfolio;
