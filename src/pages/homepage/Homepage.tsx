import React from 'react';
import video from '../../assets/conflu.mp4';
import logo from '../../assets/logo-spread-shadow.png';
import Scroll from '../../atoms/scroll/Scroll';
import './styles.css';
import useTopNavVisibility from '../../hooks/useTopNavVisibility';

function Homepage() {
  const isOpen = useTopNavVisibility();

  return (
    <>
      <video id="homepage-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <img
        src={logo}
        alt="Toukan Cinema"
        id="homepage-logo"
        className={`homepage-logo-default ${
          isOpen ? 'homepage-logo-hide' : ''
        }`}
      />
      <div id="scroll-cta-container">
        <Scroll />
      </div>
      <div id="homepage-content">
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
      </div>
    </>
  );
}

export default Homepage;
