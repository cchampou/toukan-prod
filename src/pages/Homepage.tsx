import React from 'react';
import video from '../assets/conflu.mp4';
import logo from '../assets/logo-spread-shadow.png';

function Homepage() {
  return (
    <>
      <video id="homepage-video" autoPlay loop muted controls>
        <source src={video} type="video/mp4" />
      </video>
      <img src={logo} alt="Toukan Cinema" id="homepage-logo" />
    </>
  );
}

export default Homepage;
