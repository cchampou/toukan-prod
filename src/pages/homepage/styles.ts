import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const ContentContainer = styled('div')`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
  margin: 0 auto;
  padding: 1rem;
`;
