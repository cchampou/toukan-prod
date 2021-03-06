import styled from '@emotion/styled';
import { mobileOnly } from '../../styles/theme';
import {
  TOP_NAV_HEIGHT,
  TOP_NAV_MOBILE_HEIGHT,
  TOP_NAV_V_PADDING,
} from './constants';

export const Nav = styled('nav')`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  position: fixed;
  top: 0;
  width: 90%;
  height: ${TOP_NAV_HEIGHT};
  z-index: 2;
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out,
    opacity 0.5s ease-in-out, margin-top 0.5s ease-in-out;

  padding: ${TOP_NAV_V_PADDING} 5%;
  display: flex;
  justify-content: space-between;

  ${mobileOnly} {
    height: ${TOP_NAV_MOBILE_HEIGHT};
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

export const MobileSection = styled('div')`
  display: none;
  line-height: 5vh;
  justify-content: flex-end;

  svg {
    height: calc(100% - 8px);
    padding: 4px 8px;
  }

  ${mobileOnly} {
    display: flex;
  }
`;

export const Logo = styled('button')`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 100%;
`;
