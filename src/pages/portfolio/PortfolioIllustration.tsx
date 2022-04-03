import React from 'react';
import { Helmet } from 'react-helmet';
import PortfolioTemplate from './PortfolioTemplate';
import { Entry } from './types';
import virtuoseRecto from '../../assets/images/illustrations/virtuoseRecto.webp';
import virtuoseVerso from '../../assets/images/illustrations/virtuoseVerso.webp';
import lsFive from '../../assets/images/illustrations/lsFive.jpg';
import ultiRecto from '../../assets/images/illustrations/ultiRecto.webp';
import ultiVerso from '../../assets/images/illustrations/ultiVerso.webp';
import m3ss from '../../assets/images/illustrations/M3SS.png';
import aesdana from '../../assets/images/illustrations/aesdana.webp';
import virtuose from '../../assets/images/illustrations/virtuose.webp';
import pochette from '../../assets/images/illustrations/pochette.webp';
import truc from '../../assets/images/illustrations/truc.webp';
import NOID2 from '../../assets/images/illustrations/NOID2.png';
import mine from '../../assets/images/illustrations/mine.webp';
import mensonge from '../../assets/images/illustrations/mensonge.webp';
import nebuleuse from '../../assets/images/illustrations/nebuleuse.webp';
import PLSFails from '../../assets/images/illustrations/PLSfails.webp';
import PLStest from '../../assets/images/illustrations/PLStest.webp';
import PLS2 from '../../assets/images/illustrations/PLS2.webp';

const images: Entry[] = [
  {
    url: virtuoseRecto,
    alt: 'Virtuose Recto',
    size: '',
  },
  {
    url: virtuoseVerso,
    alt: 'Virtuose Verso',
    size: '',
  },
  {
    url: lsFive,
    alt: 'LS FIVE',
    size: '',
  },
  // {
  //   url: lsFiveAlpha,
  //   alt: 'LS FIVE Alpha',
  //   size: '',
  // },
  {
    url: ultiRecto,
    alt: 'Ultimae Recto',
    size: '',
  },
  {
    url: ultiVerso,
    alt: 'Ultimae Verso',
    size: '',
  },

  {
    url: aesdana,
    alt: 'AESDANA',
    size: 'wide',
  },
  {
    url: virtuose,
    alt: 'Virtuose',
    size: 'wide',
  },
  {
    url: m3ss,
    alt: 'M3SS',
    size: '',
  },
  {
    url: pochette,
    alt: 'Pochette',
    size: 'wide',
  },
  {
    url: truc,
    alt: 'Truc',
    size: 'wide',
  },
  {
    url: NOID2,
    alt: 'NOID2',
    size: '',
  },
  {
    url: mine,
    alt: 'Mine',
    size: '',
  },
  {
    url: mensonge,
    alt: 'Mensonge',
    size: '',
  },
  {
    url: nebuleuse,
    alt: 'Nebuleuse',
    size: '',
  },
  {
    url: PLSFails,
    alt: 'PLSFails',
    size: '',
  },
  {
    url: PLStest,
    alt: 'PLStest',
    size: '',
  },
  {
    url: PLS2,
    alt: 'PLS2',
    size: '',
  },
];

function PortfolioIllustration() {
  return (
    <>
      <Helmet>
        <title>Portfolio illustration</title>
      </Helmet>
      <PortfolioTemplate images={images} square />;
    </>
  );
}

export default PortfolioIllustration;
