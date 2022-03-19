import React from 'react';
import fpv from '../assets/fpv.mp4';
import logo from '../assets/toukan.jpg';

function Homepage() {
  return (
    <>
      <video id="homepage-video" autoPlay loop muted>
        <source src={fpv} type="video/mp4" />
      </video>
      <img src={logo} alt="Toukan Cinema" id="homepage-logo" />
    </>
  );
}

export default Homepage;
