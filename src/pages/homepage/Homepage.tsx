import React from 'react';
import logoWhite from '../../assets/logo-white.png';
import Scroll from '../../atoms/scroll/Scroll';
import './styles.css';
import useTopNavVisibility from '../../hooks/useTopNavVisibility';

function Homepage() {
  const { isScrolled } = useTopNavVisibility();

  return (
    <>
      <video id="homepage-video" autoPlay loop muted>
        <source
          src="https://toukan-production.s3.eu-west-3.amazonaws.com/tokan.webm"
          type="video/mp4"
        />
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
    </>
  );
}

export default Homepage;
