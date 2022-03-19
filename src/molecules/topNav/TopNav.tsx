import React, { useCallback, useEffect } from 'react';
import logoBlack from '../../assets/logo-black.png';
import './styles.css';
import useGoToHomepage from '../../hooks/useGoToHomepage';

function TopNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const goToHomepage = useGoToHomepage();

  const handleScroll = useCallback(
    (e: MouseEvent) => {
      if (window.scrollY > 0 || e.y < window.innerHeight / 2.5) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.addEventListener('mousemove', handleScroll);
    };
  }, []);

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
