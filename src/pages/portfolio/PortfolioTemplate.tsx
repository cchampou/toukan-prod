import React, { useState } from 'react';
import { useKeyPress } from 'react-alt';
import { useClickOutside } from '@mantine/hooks';
import { ContentContainer } from '../homepage/styles';
import { Backdrop, Cinema, ClickableThumbnail, GridWrapper } from './styles';
import { Entry } from './types';

type Props = {
  images: Entry[];
};

function PortfolioTemplate({ images }: Props) {
  const [youtube, setYoutube] = useState<string>();

  useKeyPress(() => setYoutube(undefined), 'Escape');

  const ref = useClickOutside(() => setYoutube(undefined));

  return (
    <ContentContainer>
      {youtube && <Backdrop />}
      {youtube && (
        <Cinema ref={ref}>
          <iframe
            src={`https://www.youtube.com/embed/${youtube}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Cinema>
      )}
      <GridWrapper>
        {images.map(({ url, size, alt, youtubeId }) => (
          <ClickableThumbnail
            role="button"
            className={size}
            onClick={() => setYoutube(youtubeId)}
            key={alt}
          >
            <img src={url} alt={alt} />
          </ClickableThumbnail>
        ))}
      </GridWrapper>
    </ContentContainer>
  );
}

export default PortfolioTemplate;
