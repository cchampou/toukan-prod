import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Text, VideoBandContainer } from './styles';
import useHoverPlay from '../../hooks/useHoverPlay';
import './styles.css';

type Props = {
  videoSource: string;
  text: string;
  linkTo: string;
};

function VideoBand({ videoSource, text, linkTo }: Props) {
  const { playerRef, domElement } = useHoverPlay();
  const navigate = useNavigate();

  return (
    <VideoBandContainer
      className="video-band-container"
      ref={domElement}
      onClick={() => navigate(linkTo)}
    >
      <Text>{text}</Text>
      <video ref={playerRef} className="video-band" loop muted>
        <source src={videoSource} />
      </video>
    </VideoBandContainer>
  );
}

export default VideoBand;
