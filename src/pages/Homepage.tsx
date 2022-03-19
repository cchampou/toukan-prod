import React from 'react';
import video from '../assets/conflu.mp4';
import logo from '../assets/logo-spread-shadow.png';
import Scroll from '../atoms/scroll/Scroll';

function Homepage() {
  return (
    <>
      <video id="homepage-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <img src={logo} alt="Toukan Cinema" id="homepage-logo" />
      <div id="scroll-cta-container">
        <Scroll />
      </div>
    </>
  );
}

export default Homepage;
