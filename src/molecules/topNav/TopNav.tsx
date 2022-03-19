import React, { useContext } from 'react';
import logoBlack from '../../assets/logo-black.png';
import logoWhite from '../../assets/logo-white.png';
import './styles.css';
import useGoToHomepage from '../../hooks/useGoToHomepage';
import useTopNavVisibility from '../../hooks/useTopNavVisibility';
import { Nav, RightSection } from './styles';
import darkContext from '../../contexts/dark';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DarkModeSwitch from '../../atoms/darkModeSwitch/DarkModeSwitch';
import { NavLink } from 'react-router-dom';
import CallToAction from '../../atoms/callToAction/CallToAction';
import { NavItem } from '../../atoms/navItem/styles';

function TopNav() {
  const goToHomepage = useGoToHomepage();
  const { isMouseTop, isScrolled } = useTopNavVisibility();
  const { toggleDark, isDark } = useContext(darkContext);

  return (
    <Nav
      className={`top-nav-default ${
        isMouseTop || isScrolled ? 'show-top-nav' : ''
      }`}
      id="top-nav-main"
    >
      <img
        src={isDark ? logoWhite : logoBlack}
        alt="logo"
        id="top-nav-logo"
        role="button"
        onClick={goToHomepage}
      />
      <RightSection>
        <NavItem to="/portfolio">Portfolio</NavItem>
        <DarkModeSwitch onClick={toggleDark}>
          <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        </DarkModeSwitch>
        <CallToAction to="/contact">Contact</CallToAction>
      </RightSection>
    </Nav>
  );
}

export default TopNav;
