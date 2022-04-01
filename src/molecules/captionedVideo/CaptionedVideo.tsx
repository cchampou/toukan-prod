import React, { PropsWithChildren } from 'react';
import Video from '../video/Video';
import Split, { SplitText, SplitTitle, VideoContainer } from './Split';

type Props = {
  title: string;
  src: string;
  poster: string;
  reverse?: boolean;
};

function CaptionedVideo({
  title,
  children,
  src,
  poster,
  reverse = false,
}: PropsWithChildren<Props>) {
  console.log(poster);
  return (
    <Split reverse={reverse}>
      <SplitText reverse={reverse}>
        <SplitTitle reverse={reverse}>{title}</SplitTitle>
        {children}
      </SplitText>
      <VideoContainer>
        <Video src={src} />
      </VideoContainer>
    </Split>
  );
}

export default CaptionedVideo;
