import styled from '@emotion/styled';
import { mobileOnly } from '../../styles/theme';
import {
  TOP_NAV_MOBILE_HEIGHT,
  TOP_NAV_V_PADDING,
} from '../../molecules/topNav/constants';

export const ContentContainer = styled('div')`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
  margin: 96px auto 0;
  min-height: calc(100vh - 96px);

  ${mobileOnly} {
    margin: 0 auto;
    padding: 8px;
    min-height: calc(
      100vh - ${TOP_NAV_MOBILE_HEIGHT} - (${TOP_NAV_V_PADDING} * 2) - 16px
    );
  }
`;

export const PresentationContainer = styled('section')`
  padding: 32px 10%;

  ${mobileOnly} {
    padding: 32px 5%;
  }
`;

export const PresentationFlex = styled('div')`
  display: flex;
  align-items: flex-end;
  margin-bottom: 96px;

  ${mobileOnly} {
    flex-direction: column;
    margin-bottom: 64px;
  }
`;

export const PresentationParagraph = styled('p')`
  flex: 1;
  width: 40%;
  font-family: ${({ theme }) => theme.fonts.text};

  ${mobileOnly} {
    margin-bottom: 32px;
    width: 100%;
    text-align: justify;
  }
`;

export const PresentationImage = styled('img')`
  max-height: 100%;
  max-width: 100%;
`;

export const PresentationImageWrapper = styled('div')`
  flex: 1;
  margin-left: 32px;

  ${mobileOnly} {
    margin: 0;
  }
`;

export const GraySection = styled('div')`
  background-color: ${({ theme }) => theme.colors.darkLight};
  padding: 144px 0;
  transition: background 0.5s ease-in-out;

  ${mobileOnly} {
    padding: 0;
  }
`;

export const VideoBandsContainer = styled('div')`
  width: 80%;
  margin: auto;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  padding-right: 0;

  ${mobileOnly} {
    width: 100%;
  }
`;

export const HomepageVideo = styled('video')`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  display: block;
  animation: fadein 2s ease-in-out;

  ${mobileOnly} {
    height: calc(100vh - ${TOP_NAV_MOBILE_HEIGHT} - (${TOP_NAV_V_PADDING} * 2));
  }
`;

export const ScrollCTAContainer = styled('div')`
  position: absolute;
  top: 90%;
  left: 50%;
`;

type HomepageLogoProps = {
  hide: boolean;
};

export const HomepageLogo = styled('img')<HomepageLogoProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 80vw;
  width: 40rem;
  opacity: ${({ hide }) => (hide ? 0 : 1)};
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;
