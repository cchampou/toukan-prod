import { useLayoutEffect, useRef } from 'react';

function useHoverPlay() {
  const playerRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    if (playerRef.current) playerRef.current.play();
  };

  const pause = () => {
    if (playerRef.current) playerRef.current.pause();
  };

  useLayoutEffect(() => {
    if (playerRef.current) {
      playerRef.current.addEventListener('mouseenter', play);
      playerRef.current.addEventListener('mouseleave', pause);
    }
    return () => {
      if (playerRef.current) {
        playerRef.current.removeEventListener('mouseenter', play);
        playerRef.current.removeEventListener('mouseleave', pause);
      }
    };
  }, []);

  return {
    playerRef,
  };
}

export default useHoverPlay;
