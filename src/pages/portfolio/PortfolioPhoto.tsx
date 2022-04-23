import React from 'react';
import { Helmet } from 'react-helmet';
import PortfolioTemplate from './PortfolioTemplate';
import { Entry } from './types';
import stairs from '../../assets/images/photos/stairs.webp';
import stairsFull from '../../assets/images/photos/stairs.jpg';
import party from '../../assets/images/photos/party.webp';
import mensonge from '../../assets/images/photos/mensonge.webp';
import mountains from '../../assets/images/photos/mountains.webp';
import boutique from '../../assets/images/photos/boutique.webp';
import guitar from '../../assets/images/photos/guitar.webp';
import profil from '../../assets/images/photos/profil.webp';
import session from '../../assets/images/photos/session.webp';
import dj from '../../assets/images/photos/dj.webp';
import hardware from '../../assets/images/photos/hardware.webp';
import conflu1 from '../../assets/images/photos/conflu1.webp';
import conflu2 from '../../assets/images/photos/conflu2.webp';
import jstn from '../../assets/images/photos/jstn.webp';
import malongo1 from '../../assets/images/photos/malongo1.webp';
import malongo2 from '../../assets/images/photos/malongo2.webp';
import r4dcolo1 from '../../assets/images/photos/r4dcolo1.webp';
import r4dcolo2 from '../../assets/images/photos/r4dcolo2.webp';
import coiffeur from '../../assets/images/photos/coiffeur.webp';
import focus from '../../assets/images/photos/focus.webp';
import photograph from '../../assets/images/photos/photograph.webp';

const images: Entry[] = [
  {
    url: focus,
    fullImage: focus,
    alt: 'Focus',
    size: 'tall',
  },
  {
    url: photograph,
    fullImage: photograph,
    alt: 'Photographe',
    size: 'wide',
  },
  {
    url: coiffeur,
    fullImage: coiffeur,
    alt: 'coiffeur',
    size: 'tall',
  },
  {
    url: stairs,
    fullImage: stairsFull,
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
  {
    url: conflu1,
    alt: 'Confluence 1',
    size: 'wide',
  },
  {
    url: conflu2,
    alt: 'Confluence 2',
    size: 'tall',
  },
  {
    url: malongo1,
    alt: 'Malongo 1',
    size: '',
  },
  {
    url: malongo2,
    alt: 'Malongo 2',
    size: 'tall',
  },
  {
    url: jstn,
    alt: 'JSTN',
    size: 'big',
  },
  {
    url: r4dcolo1,
    alt: 'R4D COLO 1',
    size: 'tall',
  },
  {
    url: r4dcolo2,
    alt: 'R4D COLO 2',
    size: 'wide',
  },
];

function PortfolioPhoto() {
  return (
    <>
      <Helmet>
        <title>Portfolio photo</title>
      </Helmet>
      <PortfolioTemplate images={images} />
    </>
  );
}

export default PortfolioPhoto;
