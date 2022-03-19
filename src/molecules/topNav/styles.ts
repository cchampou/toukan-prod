import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const Nav = styled('nav')`
  background-color: ${({ theme }) => theme.colors.light};
`;

export const RightSection = styled('div')`
  display: flex;
  align-items: center;
  margin-right: -32px;
`;
