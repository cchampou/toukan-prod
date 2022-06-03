import React, { useContext } from 'react';
import {
  faBars,
  faEnvelope,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from 'react-router-dom';
import { useScrollLock } from '@mantine/hooks';
import logoBlack from '../../assets/logo-black.webp';
import logoWhite from '../../assets/logo-white.webp';
import './styles.css';
import useGoToHomepage from '../../hooks/useGoToHomepage';
import useTopNavVisibility from '../../hooks/useTopNavVisibility';
import { Logo, MobileSection, Nav, RightSection } from './styles';
import darkContext from '../../contexts/dark';
import DarkModeSwitch from '../../atoms/darkModeSwitch/DarkModeSwitch';
import CallToAction from '../../atoms/callToAction/CallToAction';
import { NavItem } from '../../atoms/navItem/styles';
import MobileNav from '../mobileNav/MobileNav';

type NavigationState = {
  isMobileMenuVisible: boolean;
};

function TopNav() {
  const goToHomepage = useGoToHomepage();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as NavigationState;
  const { isMouseTop, isScrolled } = useTopNavVisibility();
  const { toggleDark, isDark } = useContext(darkContext);
  useScrollLock(!!state);

  return (
    <Nav
      className={`top-nav-default ${
        isMouseTop || isScrolled ? 'show-top-nav' : ''
      }`}
    >
      <Logo role="button" onClick={goToHomepage}>
        <img
          src={isDark ? logoWhite : logoBlack}
          alt="Toukan Production logo"
          height="100%"
          width="auto"
        />
      </Logo>
      <RightSection>
        {/* <NavItem to="/profile">Profil</NavItem> */}
        <NavItem to="/portfolio">Portfolio</NavItem>
        <NavItem to="/rental">Location</NavItem>
        {/* <NavItem to="/news">Actualité</NavItem> */}
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
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => {
            if (state) {
              navigate(-1);
            } else {
              navigate('/', { state: { isMobileMenuVisible: true } });
            }
          }}
          cursor="pointer"
        />
      </MobileSection>
      {state && state.isMobileMenuVisible && <MobileNav />}
    </Nav>
  );
}

export default TopNav;
