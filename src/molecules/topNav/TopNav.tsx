import React, { useCallback, useEffect } from 'react';
import logoBlack from '../../assets/logo-black.png';
import './styles.css';
import useGoToHomepage from '../../hooks/useGoToHomepage';
import useTopNavVisibility from '../../hooks/useTopNavVisibility';

function TopNav() {
  const goToHomepage = useGoToHomepage();
  const isOpen = useTopNavVisibility();

  return (
    <nav
      className={`top-nav-default ${isOpen ? 'show-top-nav' : ''}`}
      id="top-nav-main"
    >
      <img
        src={logoBlack}
        alt="logo"
        id="top-nav-logo"
        role="button"
        onClick={goToHomepage}
      />
    </nav>
  );
}

export default TopNav;
