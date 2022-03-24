import React from 'react';
import useHoverPlay from '../../hooks/useHoverPlay';
import './styles.css';
import { useNavigate } from 'react-router-dom';

type Props = {
  videoSource: string;
  text: string;
  linkTo: string;
};

function VideoBand({ videoSource, text, linkTo }: Props) {
  const { playerRef } = useHoverPlay();
  const navigate = useNavigate();

  return (
    <div className="video-band-container">
      <h2>{text}</h2>
      <video
        ref={playerRef}
        className="video-band"
        loop
        muted
        onClick={() => navigate(linkTo)}
      >
        <source src={videoSource} />
      </video>
    </div>
  );
}

export default VideoBand;
