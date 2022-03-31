import React, { useEffect, useRef } from 'react';
import { Container } from './styles';

type Props = Pick<HTMLSourceElement, 'type'> &
  Pick<HTMLSourceElement, 'src'> &
  Pick<HTMLVideoElement, 'poster'>;

function Video({ type, src, poster }: Props) {
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (playerRef.current) playerRef.current.volume = 0.5;
  }, [playerRef]);

  return (
    <Container>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video ref={playerRef} controls poster={poster} controlsList="nodownload">
        <source type={type} src={src} />
      </video>
    </Container>
  );
}

export default Video;
