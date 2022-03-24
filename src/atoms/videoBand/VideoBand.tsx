import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div
      className="video-band-container"
      ref={domElement}
      onClick={() => navigate(linkTo)}
    >
      <h2>{text}</h2>
      <video ref={playerRef} className="video-band" loop muted>
        <source src={videoSource} />
      </video>
    </div>
  );
}

export default VideoBand;
