import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { TOP_NAV_MOBILE_HEIGHT, TOP_NAV_V_PADDING } from '../topNav/constants';

const Container = styled('ul')`
  width: 100%;
  height: calc(100% - ${TOP_NAV_MOBILE_HEIGHT} - ${TOP_NAV_V_PADDING} * 2);
  margin: 0;
  padding: 0;
  left: 0;
  top: calc(${TOP_NAV_MOBILE_HEIGHT} + ${TOP_NAV_V_PADDING} * 2);
  position: fixed;
  background-color: ${({ theme }) => theme.colors.light};
  list-style: none;
  text-align: right;

  li {
    margin: 0;
    padding: 0;
  }

  li a {
    font-size: 2rem;
    font-family: ${({ theme }) => theme.fonts.intense};
    display: block;
    padding: 32px 16px;
  }
`;

function MobileNav() {
  return (
    <Container>
      <li>
        <NavLink to="/">Accueil</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/rental">Location</NavLink>
      </li>
      <li>
        <NavLink to="/news">Actualité</NavLink>
      </li>
    </Container>
  );
}

export default MobileNav;
