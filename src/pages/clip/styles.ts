import styled from '@emotion/styled';
import { mobileOnly } from '../../styles/theme';

export const Title = styled('h1')`
  margin-top: 0;
`;

export const Intro = styled('p')`
  margin: auto;
  margin-top: 0;
  text-align: center;
  width: 60%;

  ${mobileOnly} {
    text-align: justify;
    width: 90%;
  }
`;

export const Container = styled('div')`
  width: 100%;
  margin: auto;
  padding: 0;
  padding-top: 96px;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  transition: all 0.5s ease-in-out;
  min-height: calc(100vh - 244px);

  ${mobileOnly} {
    padding-top: 0;
  }
`;

export const Band = styled('div')`
  background-color: ${({ theme }) => theme.colors.darkLight};
  padding: 96px 0;
`;
