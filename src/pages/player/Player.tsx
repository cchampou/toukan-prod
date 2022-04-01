import React from 'react';
import Video from '../../molecules/video/Video';
import { ContentContainer } from '../homepage/styles';

function Player() {
  return (
    <ContentContainer>
      <Video src="https://toukan.cdn.cchampou.me/content/clip/clip-demo/manifest.mpd" />
    </ContentContainer>
  );
}

export default Player;
