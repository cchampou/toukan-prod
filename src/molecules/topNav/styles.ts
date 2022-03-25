import styled from '@emotion/styled';

export const Nav = styled('nav')`
  background-color: ${({ theme }) => theme.colors.light};
  position: fixed;
  width: 90%;
  height: 64px;
  z-index: 2;
  transition: all 0.5s ease-in-out;
  padding: 16px 5%;
  display: flex;
  justify-content: space-between;
`;

export const RightSection = styled('div')`
  display: flex;
  align-items: center;
  margin-right: -32px;
`;
