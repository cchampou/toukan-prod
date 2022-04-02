import React, { useLayoutEffect, useRef } from 'react';
// @ts-ignore
import shaka from 'shaka-player/dist/shaka-player.ui';
import 'shaka-player/dist/controls.css';
import { UIContainer, VideoPlayer } from './styles';

type Props = {
  src: string;
};

function Video({ src }: Props) {
  const HTMLPlayerRef = useRef<HTMLVideoElement>(null);
  const uiContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const player = new shaka.Player(HTMLPlayerRef.current);
    const ui = new shaka.ui.Overlay(
      player,
      uiContainerRef.current,
      HTMLPlayerRef.current
    );
    const config = {
      overflowMenuButtons: ['quality', 'statistics'],
    };
    ui.configure(config);
    player.load(src);
  }, []);

  return (
    <UIContainer ref={uiContainerRef}>
      <VideoPlayer ref={HTMLPlayerRef} />
    </UIContainer>
  );
}

export default Video;
