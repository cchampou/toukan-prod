import React from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import Video from '../../molecules/video/Video';
import { ContentContainer } from '../homepage/styles';

const OverrideContentContainer = styled(ContentContainer)`
  width: 50%;
`;

function Player() {
  return (
    <>
      <Helmet>
        <title>Video player Toukan Production</title>
      </Helmet>
      <OverrideContentContainer>
        <Video src="https://toukan-cdn.cchampou.me/content/clip/clip-demo/manifest.mpd" />
      </OverrideContentContainer>
    </>
  );
}

export default Player;
