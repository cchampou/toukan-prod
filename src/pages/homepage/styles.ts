import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const ContentContainer = styled('div')`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
  margin: 0 auto;
  min-height: calc(100vh - 2rem);
`;

export const PresentationContainer = styled('section')`
  padding: 80px 10vw;
`;

export const PresentationParagraph = styled('p')`
  width: 40vw;
  line-height: 1.5;
`;
