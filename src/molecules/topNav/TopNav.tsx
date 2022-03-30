import React, { useContext } from 'react';
import {
  faBars,
  faEnvelope,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import logoBlack from '../../assets/logo-black.png';
import logoWhite from '../../assets/logo-white.png';
import './styles.css';
import useGoToHomepage from '../../hooks/useGoToHomepage';
import useTopNavVisibility from '../../hooks/useTopNavVisibility';
import { MobileSection, Nav, RightSection } from './styles';
import darkContext from '../../contexts/dark';
import DarkModeSwitch from '../../atoms/darkModeSwitch/DarkModeSwitch';
import CallToAction from '../../atoms/callToAction/CallToAction';
import { NavItem } from '../../atoms/navItem/styles';

function TopNav() {
  const goToHomepage = useGoToHomepage();
  const navigate = useNavigate();
  const { isMouseTop, isScrolled } = useTopNavVisibility();
  const { toggleDark, isDark } = useContext(darkContext);

  return (
    <Nav
      className={`top-nav-default ${
        isMouseTop || isScrolled ? 'show-top-nav' : ''
      }`}
    >
      <img
        src={isDark ? logoWhite : logoBlack}
        alt="logo"
        id="top-nav-logo"
        role="button"
        onClick={goToHomepage}
      />
      <RightSection>
        <NavItem to="/profile">Profil</NavItem>
        <NavItem to="/portfolio">Portfolio</NavItem>
        <NavItem to="/rental">Location</NavItem>
        <NavItem to="/news">Actualité</NavItem>
        <DarkModeSwitch onClick={toggleDark}>
          <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        </DarkModeSwitch>
        <CallToAction to="/contact">CONTACT</CallToAction>
      </RightSection>
      <MobileSection>
        <FontAwesomeIcon
          icon={faEnvelope}
          onClick={() => navigate('/contact')}
          cursor="pointer"
        />
        <FontAwesomeIcon icon={faBars} />
      </MobileSection>
    </Nav>
  );
}

export default TopNav;
