import React from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import { MainPageWrapper } from './styles';
import videos from '../../assets/images/thumbnails/pls.jpg';
import photos from '../../assets/images/photos/profil.webp';
import illustrations from '../../assets/images/illustrations/ultiRecto.webp';
import { mobileOnly } from '../../styles/theme';

type PanelProps = {
  image: string;
  position: string;
  mPosition: string;
};

const Panel = styled(NavLink)<PanelProps>`
  background: url(${({ image }) => image});
  background-position: ${({ position }) => position};
  background-size: cover;
  position: relative;
  font-size: 3.5rem;
  line-height: 100%;
  padding-top: 4vh;
  flex: 1;
  margin-right: 10px;
  filter: brightness(0.6);
  transition: filter 0.3s ease-in-out;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  text-align: center;
  color: white;

  &:hover {
    filter: brightness(1);
  }

  ${mobileOnly} {
    filter: brightness(1);
    padding-top: 10vh;
    padding-left: 20px;
    margin-bottom: 10px;
    font-size: 1.5rem;
    background-position: ${({ mPosition }) => mPosition};
  }
`;

function Portfolio() {
  return (
    <MainPageWrapper>
      <Helmet>
        <title>Portfolio Toukan Production</title>
      </Helmet>
      <Panel
        to="/portfolio/videos"
        image={videos}
        position="center"
        mPosition="center"
      >
        Videos
      </Panel>
      <Panel
        to="/portfolio/photos"
        image={photos}
        position="center"
        mPosition="50% 20%"
      >
        Photos
      </Panel>
      <Panel
        to="/portfolio/creations"
        image={illustrations}
        position="left"
        mPosition="left"
      >
        Illustrations
      </Panel>
    </MainPageWrapper>
  );
}

export default Portfolio;
