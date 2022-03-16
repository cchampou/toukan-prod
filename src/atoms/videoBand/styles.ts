import styled from '@emotion/styled';
import { mobileOnly } from '../../styles/theme';

export const VideoBandContainer = styled('button')`
  position: relative;
  cursor: pointer;
  border: none;
  background: none;
  width: 100%;
  height: 20vw;
  max-height: 256px;
  padding: 0;
  overflow: hidden;

  ${mobileOnly} {
    height: 96px;
  }
`;

export const Video = styled('video')`
  position: absolute;
  width: 110%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Text = styled('h2')`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-shadow: 0 0 10px black;
  color: white;
  margin: 0;
`;
