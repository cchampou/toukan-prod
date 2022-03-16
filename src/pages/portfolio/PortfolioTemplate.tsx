import React from 'react';
import { useKeyPress } from 'react-alt';
import { useScrollLock } from '@mantine/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { ContentContainer } from '../homepage/styles';
import { Cinema, ClickableThumbnail, GridWrapper } from './styles';
import { Entry } from './types';
import ImageComponent from '../../atoms/image/ImageComponent';
import { getEntryContent } from './utils';

type Props = {
  images: Entry[];
  square?: boolean;
};

type NavigationState = {
  youtube?: string;
  fullImage?: string;
};

function PortfolioTemplate({ images, square }: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as NavigationState;

  useKeyPress(() => {
    navigate(-1);
  }, 'Escape');

  useScrollLock(!!state);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (state.fullImage) {
        const index = images.findIndex(
          (image) => getEntryContent(image) === state.fullImage
        );
        if (index < images.length - 1) {
          navigate('', {
            state: {
              fullImage: getEntryContent(images[index + 1]),
            },
            replace: true,
          });
        }
      }
    },
    onSwipedRight: () => {
      if (state.fullImage) {
        const index = images.findIndex(
          (image) => getEntryContent(image) === state.fullImage
        );
        if (index > 0) {
          navigate('', {
            state: {
              fullImage: getEntryContent(images[index - 1]),
            },
            replace: true,
          });
        }
      }
    },
  });

  return (
    <ContentContainer {...handlers}>
      {state && state.fullImage && (
        <Cinema onClick={() => navigate(-1)}>
          <ImageComponent src={state.fullImage} alt="Fullscreen image" />
        </Cinema>
      )}
      {state && state.youtube && (
        <Cinema>
          <iframe
            src={`https://www.youtube.com/embed/${state.youtube}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Cinema>
      )}
      <GridWrapper square={square}>
        {images.map(({ url, size, alt, youtubeId, fullImage }) => (
          <ClickableThumbnail
            role="button"
            className={size}
            fadeInDuration={Math.random() + 0.5}
            onClick={() => {
              if (youtubeId) {
                navigate('', {
                  state: {
                    youtube: youtubeId,
                  },
                });
              } else if (fullImage) {
                navigate('', {
                  state: {
                    fullImage,
                  },
                });
              } else {
                navigate('', {
                  state: {
                    fullImage: url,
                  },
                });
              }
            }}
            key={alt}
          >
            <ImageComponent src={url} alt={alt} />
          </ClickableThumbnail>
        ))}
      </GridWrapper>
    </ContentContainer>
  );
}

export default PortfolioTemplate;
