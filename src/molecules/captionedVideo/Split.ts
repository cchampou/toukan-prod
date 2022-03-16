import styled from '@emotion/styled';
import { mobileOnly } from '../../styles/theme';

type Props = {
  reverse: boolean;
};

const Split = styled('div')<Props>`
  display: flex;
  padding: 96px 0;
  width: 80%;
  margin: auto;
  align-items: flex-end;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

  ${mobileOnly} {
    width: 90%;
    flex-direction: column;
    padding: 64px 0;
  }
`;

export const SplitTitle = styled('h2')<Props>`
  margin: 0;
  text-align: ${({ reverse }) => (reverse ? 'left' : 'right')};
`;

export const SplitText = styled('section')<Props>`
  width: 40%;
  margin-bottom: 5%;
  text-align: ${({ reverse }) => (reverse ? 'left' : 'right')};

  ${mobileOnly} {
    width: 100%;
  }
`;

export const VideoContainer = styled('div')`
  width: 50%;
  margin: auto;

  ${mobileOnly} {
    width: 100%;
  }
`;

export default Split;
