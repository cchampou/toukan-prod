import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Text, Video, VideoBandContainer } from './styles';
import useHoverPlay from '../../hooks/useHoverPlay';
import './styles.css';

type Props = {
  videoSources: [string, string][];
  text: string;
  linkTo: string;
  poster: string;
};

function VideoBand({ videoSources, text, linkTo, poster }: Props) {
  const { playerRef, domElement } = useHoverPlay();
  const navigate = useNavigate();

  return (
    <VideoBandContainer
      className="video-band-container"
      ref={domElement}
      onClick={() => navigate(linkTo)}
    >
      <Text>{text}</Text>
      <Video ref={playerRef} className="video-band" poster={poster} loop muted>
        {videoSources.map(([source, type]) => (
          <source key={source} src={source} type={type} />
        ))}
      </Video>
    </VideoBandContainer>
  );
}

export default VideoBand;
