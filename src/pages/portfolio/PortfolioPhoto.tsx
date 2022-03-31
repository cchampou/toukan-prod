import React from 'react';
import Portfolio from './Portfolio';
import { Entry } from './types';
import stairs from '../../assets/images/photos/stairs.webp';
import party from '../../assets/images/photos/party.webp';
import mensonge from '../../assets/images/photos/mensonge.webp';
import mountains from '../../assets/images/photos/mountains.webp';
import boutique from '../../assets/images/photos/boutique.webp';
import guitar from '../../assets/images/photos/guitar.webp';
import profil from '../../assets/images/photos/profil.webp';
import session from '../../assets/images/photos/session.webp';
import dj from '../../assets/images/photos/dj.webp';
import hardware from '../../assets/images/photos/hardware.webp';

const images: Entry[] = [
  {
    url: stairs,
    alt: 'Portrait',
    size: '',
  },
  {
    url: party,
    alt: 'Party',
    size: 'tall',
  },
  {
    url: mensonge,
    alt: 'Mensonge',
    size: 'tall',
  },
  {
    url: mountains,
    alt: 'Mountains',
    size: 'wide',
  },
  {
    url: session,
    alt: 'Session',
    size: 'tall',
  },
  {
    url: profil,
    alt: 'Profil',
    size: 'tall',
  },
  {
    url: guitar,
    alt: 'Guitare',
    size: 'tall',
  },
  {
    url: boutique,
    alt: 'Boutique',
    size: 'big',
  },
  {
    url: dj,
    alt: 'DJ',
    size: 'tall',
  },
  {
    url: hardware,
    alt: 'Hardware',
    size: 'big',
  },
];

function PortfolioPhoto() {
  return <Portfolio images={images} />;
}

export default PortfolioPhoto;
