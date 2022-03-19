import React, { useCallback, useEffect } from 'react';

function useTopNavVisibility() {
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

  return isOpen;
}

export default useTopNavVisibility;
