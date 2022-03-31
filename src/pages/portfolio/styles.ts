import styled from '@emotion/styled';
import { mobileOnly } from '../../styles/theme';
import { ContentContainer } from '../homepage/styles';

export const ClickableThumbnail = styled('button')`
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

export const GridWrapper = styled('div')`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
  width: 80%;
  margin: auto;
  padding-bottom: 16px;

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

export const Backdrop = styled('div')`
  background-color: black;
  opacity: 0.9;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
`;

export const Cinema = styled('div')`
  position: fixed;
  width: 80vw;
  height: 80vh;
  background-color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  z-index: 10;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  iframe {
    margin: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const MainPageWrapper = styled(ContentContainer)`
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.primary};

  div {
    display: flex;
    flex-direction: column;
  }

  a {
    display: flex;
    text-align: center;
    margin: 2.5rem;
    font-size: 2.5rem;
  }
`;
