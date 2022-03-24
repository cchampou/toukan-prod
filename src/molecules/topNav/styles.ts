import styled from '@emotion/styled';

export const Nav = styled('nav')`
  background-color: ${({ theme }) => theme.colors.light};
  position: fixed;
  width: calc(100vw - 192px);
  height: 48px;
  z-index: 2;
  transition: all 0.5s ease-in-out;
  padding: 16px 96px;
  display: flex;
  justify-content: space-between;
`;

export const RightSection = styled('div')`
  display: flex;
  align-items: center;
  margin-right: -32px;
`;
