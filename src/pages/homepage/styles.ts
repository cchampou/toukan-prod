import styled from '@emotion/styled';

export const ContentContainer = styled('div')`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
  margin: 0 auto;
  min-height: 100vh;
`;

export const PresentationContainer = styled('section')`
  padding: 32px 10%;
`;

export const PresentationFlex = styled('div')`
  display: flex;
  align-items: flex-end;
  margin-bottom: 96px;

  img {
    margin-left: 64px;
    height: 400px;
  }
`;

export const PresentationParagraph = styled('p')`
  width: 40vw;
  margin-bottom: 96px;
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const GraySection = styled('div')`
  background-color: ${({ theme }) => theme.colors.darkLight};
  padding: 150px 0;
  transition: background 0.5s ease-in-out;
`;

export const VideoBandsContainer = styled('div')`
  width: 80%;
  margin: auto;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  padding-right: 0;
`;
