import React, { useLayoutEffect, useRef, useState } from 'react';
// @ts-ignore
import shaka from 'shaka-player/dist/shaka-player.ui';
import 'shaka-player/dist/controls.css';
import './stylesOverrides.css';
import { UIContainer, VideoPlayer } from './styles';
import Loader from '../../atoms/loader/Loader';

type Props = {
  src: string;
  poster: string;
};

function Video({ src, poster }: Props) {
  const HTMLPlayerRef = useRef<HTMLVideoElement>(null);
  const uiContainerRef = useRef<HTMLDivElement>(null);
  const [buffering, setBuffering] = useState(false);

  const bufferHandler = ({
    buffering: newBufferingValue,
  }: shaka.Player.event) => {
    setBuffering(newBufferingValue);
  };

  useLayoutEffect(() => {
    const player = new shaka.Player(HTMLPlayerRef.current);
    player.addEventListener('buffering', bufferHandler);
    const ui = new shaka.ui.Overlay(
      player,
      uiContainerRef.current,
      HTMLPlayerRef.current
    );
    const config: shaka.Player.UIConfiguration = {
      overflowMenuButtons: ['quality', 'statistics'],
      showUnbufferedStart: false,
    };
    ui.configure(config);
    player.load(src);

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <UIContainer ref={uiContainerRef}>
      {buffering && <Loader />}
      <VideoPlayer ref={HTMLPlayerRef} poster={poster} />
    </UIContainer>
  );
}

export default Video;
