import React from 'react';
import { Helmet } from 'react-helmet';
import r4d from '../../assets/images/thumbnails/r4d_colo.jpg';
import confluence from '../../assets/images/thumbnails/conflu.jpg';
import dji from '../../assets/images/thumbnails/dji_insta.jpg';
import ronin from '../../assets/images/thumbnails/ronin.jpg';
import valmy from '../../assets/images/thumbnails/valmy.jpg';
import fourAxis from '../../assets/images/thumbnails/4axis.jpg';
import baston from '../../assets/images/thumbnails/baston.jpg';
import ultimae from '../../assets/images/thumbnails/ultimae.webp';
import r4dMonitor from '../../assets/images/thumbnails/r4d_monitor.jpg';
import pls from '../../assets/images/thumbnails/pls.jpg';
import PortfolioTemplate from './PortfolioTemplate';
import { Entry } from './types';

const images: Entry[] = [
  {
    url: pls,
    alt: 'FOCUS - PLS',
    size: 'big',
    youtubeId: 'plZgl_DleS4',
  },
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
    youtubeId: 'TWJqsq8Mvrs',
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

function PortfolioVideo() {
  return (
    <>
      <Helmet>
        <title>Portfolio video</title>
      </Helmet>
      <PortfolioTemplate images={images} />
    </>
  );
}

export default PortfolioVideo;
