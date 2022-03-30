import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const Headline = styled('h1')`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${({ theme }) => theme.fonts.primary};
`;
