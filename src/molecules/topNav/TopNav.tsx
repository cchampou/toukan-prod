import React, { useCallback, useEffect } from 'react';
import './styles.css';

function TopNav() {
  const [isOpen, setIsOpen] = React.useState(false);

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
    />
  );
}

export default TopNav;
