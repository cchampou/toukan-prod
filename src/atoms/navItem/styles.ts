import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const NavItem = styled(NavLink)`
  margin: 0 64px;
  padding: 12px 32px;
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.primary};
  letter-spacing: 1px;
  font-size: 1.1rem;
`;
