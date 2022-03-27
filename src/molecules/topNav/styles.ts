import styled from '@emotion/styled';
import { mobileOnly } from '../../styles/theme';

export const Nav = styled('nav')`
  background-color: ${({ theme }) => theme.colors.light};
  position: fixed;
  top: 0;
  width: 90%;
  height: 64px;
  z-index: 2;
  transition: all 0.5s ease-in-out;
  padding: 16px 5%;
  display: flex;
  justify-content: space-between;

  ${mobileOnly} {
    height: 5vh;
    position: relative;
    opacity: 1;
    margin-top: 0;
  }
`;

export const RightSection = styled('div')`
  display: flex;
  align-items: center;
  margin-right: -32px;

  ${mobileOnly} {
    display: none;
  }
`;
