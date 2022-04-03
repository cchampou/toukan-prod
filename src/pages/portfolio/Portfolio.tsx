import React from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MainPageWrapper } from './styles';

function Portfolio() {
  return (
    <MainPageWrapper>
      <Helmet>
        <title>Portfolio Toukan Production</title>
      </Helmet>
      <div>
        <NavLink to="/portfolio/videos">Videos</NavLink>
        <br />
        <NavLink to="/portfolio/photos">Photos</NavLink>
        <br />
        <NavLink to="/portfolio/creations">Illustrations</NavLink>
      </div>
    </MainPageWrapper>
  );
}

export default Portfolio;
