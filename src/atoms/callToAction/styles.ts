import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled('button')`
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  transition: all 0.5s ease-in-out;
  border: none;
  margin: 0 32px;
  cursor: pointer;
  font-weight: bolder;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.intense};
  letter-spacing: 1px;
`;
