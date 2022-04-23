import React from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import { MainPageWrapper } from './styles';
import focus from '../../assets/images/photos/focus.webp';
import session from '../../assets/images/photos/session.webp';
import virtuoseRecto from '../../assets/images/illustrations/virtuoseRecto.webp';
import { mobileOnly } from '../../styles/theme';

type PanelProps = {
  image: string;
};

const Panel = styled(NavLink)<PanelProps>`
  background-image: url(${({ image }) => image});
  background-size: cover;
  position: relative;
  font-size: 2.5rem;
  line-height: 100%;
  display: flex;
  padding-top: 60vh;
  padding-left: 20px;
  flex: 1;
  outline: solid 10px ${({ theme }) => theme.colors.light};

  ${mobileOnly} {
    padding-top: 10vh;
    padding-left: 20px;
  }
`;

function Portfolio() {
  return (
    <MainPageWrapper>
      <Helmet>
        <title>Portfolio Toukan Production</title>
      </Helmet>
      <Panel to="/portfolio/videos" image={focus}>
        Videos
      </Panel>
      <Panel to="/portfolio/photos" image={session}>
        Photos
      </Panel>
      <Panel to="/portfolio/creations" image={virtuoseRecto}>
        Illustrations
      </Panel>
    </MainPageWrapper>
  );
}

export default Portfolio;
