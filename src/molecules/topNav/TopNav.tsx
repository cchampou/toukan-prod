import React, { useCallback, useEffect } from 'react';
import './styles.css';

function TopNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleScroll = useCallback(
    (e: MouseEvent) => {
      if (e.y < 200) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleScroll);
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
