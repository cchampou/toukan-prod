import { useLayoutEffect, useRef } from 'react';

function useHoverPlay() {
  const playerRef = useRef<HTMLVideoElement>(null);
  const domElement = useRef<HTMLDivElement>(null);

  const play = () => {
    if (playerRef.current) playerRef.current.play();
  };

  const pause = () => {
    if (playerRef.current) playerRef.current.pause();
  };

  useLayoutEffect(() => {
    if (domElement.current) {
      domElement.current.addEventListener('mouseenter', play);
      domElement.current.addEventListener('mouseleave', pause);
    }
    return () => {
      if (domElement.current) {
        domElement.current.removeEventListener('mouseenter', play);
        domElement.current.removeEventListener('mouseleave', pause);
      }
    };
  }, []);

  return {
    playerRef,
    domElement,
  };
}

export default useHoverPlay;
