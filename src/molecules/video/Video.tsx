import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useRef, useState } from 'react';
import { Container, Play } from './styles';

function Video({ type, src, poster }) {
  const playerRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlayPause = useCallback(() => {
    if (!playerRef.current) return;
    if (playerRef.current.paused) {
      playerRef.current.play().then(() => null);
      setPlaying(true);
    } else {
      playerRef.current.pause();
      setPlaying(false);
    }
  }, [playerRef, setPlaying]);

  return (
    <Container>
      {/* <Play onClick={togglePlayPause}> */}
      {/*  <FontAwesomeIcon icon={playing ? faPause : faPlay} /> */}
      {/* </Play> */}
      <video ref={playerRef} controls poster={poster}>
        <source type={type} src={src} />
      </video>
    </Container>
  );
}

export default Video;
