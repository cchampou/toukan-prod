import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { mobileOnly } from '../../styles/theme';
import { ContentContainer } from '../homepage/styles';

const appear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ClickableThumbnail = styled('button')<{ fadeInDuration: number }>`
  animation: ${appear} ${({ fadeInDuration }) => fadeInDuration}s ease-in-out;
  background-color: transparent;
  padding: 0;
  border: none;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const squareStyle = css`
  grid-template-columns: repeat(auto-fit, 250px);
  grid-auto-rows: 250px;
`;

type GridWrapperProps = {
  square?: boolean;
};

export const GridWrapper = styled('div')<GridWrapperProps>`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  ${({ square }) => (square ? squareStyle : '')}
  grid-auto-flow: dense;
  width: 80%;
  margin: auto;
  padding-bottom: 16px;
  justify-content: center;

  ${mobileOnly} {
    width: 90%;
  }

  .wide {
    grid-column: span 2;

    ${mobileOnly} {
      grid-column: initial;
    }
  }

  .tall {
    grid-row: span 2;

    ${mobileOnly} {
      grid-row: initial;
    }
  }

  .big {
    grid-column: span 2;
    grid-row: span 2;

    ${mobileOnly} {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;

export const Cinema = styled('div')`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  z-index: 10;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  img {
    margin: auto;
    max-height: 100%;
    max-width: 100%;
  }

  iframe {
    margin: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const MainPageWrapper = styled(ContentContainer)`
  justify-content: center;
  align-items: stretch;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.primary};

  ${mobileOnly} {
    flex-direction: column;
  }
`;
