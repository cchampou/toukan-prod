import React, { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useTopNavVisibility() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMouseTop, setIsMouseTop] = React.useState(false);
  const { pathname } = useLocation();

  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [setIsScrolled]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (e.y < window.innerHeight / 2.5 || e.x > window.innerWidth * 0.9) {
        setIsMouseTop(true);
      } else {
        setIsMouseTop(false);
      }
    },
    [setIsMouseTop]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return { isScrolled: pathname !== '/' || isScrolled, isMouseTop };
}

export default useTopNavVisibility;
