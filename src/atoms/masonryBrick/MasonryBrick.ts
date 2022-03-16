import styled from '@emotion/styled';

type Props = {
  ratio: number;
};

const MasonryBrick = styled('div')<Props>`
  width: 30%;
  aspect-ratio: ${({ ratio }) => ratio};
  outline: 1px dashed red;
  display: block;
`;

export default MasonryBrick;
