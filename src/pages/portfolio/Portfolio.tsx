import React from 'react';
import { NavLink } from 'react-router-dom';
import { MainPageWrapper } from './styles';

function Portfolio() {
  return (
    <MainPageWrapper>
      <div>
        <NavLink to="/portfolio/videos">Videos</NavLink>
        <br />
        <NavLink to="/portfolio/photos">Photos</NavLink>
      </div>
    </MainPageWrapper>
  );
}

export default Portfolio;
