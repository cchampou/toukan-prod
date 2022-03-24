import React, { useCallback, useEffect } from 'react';

function useTopNavVisibility() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMouseTop, setIsMouseTop] = React.useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [setIsScrolled]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (e.y < window.innerHeight / 2.5) {
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

  return { isScrolled, isMouseTop };
}

export default useTopNavVisibility;
