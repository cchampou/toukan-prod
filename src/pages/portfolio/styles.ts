import styled from '@emotion/styled';

export const ClickableThumbnail = styled('button')`
  background-color: transparent;
  padding: 0;
  border: none;
  overflow: hidden;

  img {
    transition: transform 0.5s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;
