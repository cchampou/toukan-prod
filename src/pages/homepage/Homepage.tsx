import React from 'react';
import video from '../../assets/intro.mp4';
import logoWhite from '../../assets/logo-white.png';
import Scroll from '../../atoms/scroll/Scroll';
import './styles.css';
import useTopNavVisibility from '../../hooks/useTopNavVisibility';
import { ContentContainer } from './styles';

function Homepage() {
  const { isScrolled } = useTopNavVisibility();

  return (
    <>
      <video id="homepage-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <img
        src={logoWhite}
        alt="Toukan Cinema"
        id="homepage-logo"
        className={`homepage-logo-default ${
          isScrolled ? 'homepage-logo-hide' : ''
        }`}
      />
      <div id="scroll-cta-container">
        <Scroll />
      </div>
      <ContentContainer>
        <h1>Toukantéki</h1>
        <p>
          Toukantéki is a film festival that celebrates the film industry and
          the creative community.
        </p>
        <p>
          Toukantéki is a film festival that celebrates the film industry and
          the creative community.
        </p>
        <p>
          Toukantéki is a film festival that celebrates the film industry and
          the creative community.
        </p>
        <p>
          Toukantéki is a film festival that celebrates the film industry and
          the creative community.
        </p>
        <p>
          Toukantéki is a film festival that celebrates the film industry and
          the creative community.
        </p>
        <p>
          Toukantéki is a film festival that celebrates the film industry and
          the creative community.
        </p>
        <p>
          Toukantéki is a film festival that celebrates the film industry and
          the creative community.
        </p>
      </ContentContainer>
    </>
  );
}

export default Homepage;
