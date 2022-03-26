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

  @media (max-width: 800px) {
    padding: 32px 5%;
  }
`;

export const PresentationFlex = styled('div')`
  display: flex;
  align-items: flex-end;
  margin-bottom: 96px;

  img {
    margin-left: 64px;
    height: 400px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 64px;

    img {
      margin: auto;
      width: 100%;
      height: auto;
    }
  }
`;

export const PresentationParagraph = styled('p')`
  width: 40vw;
  margin-bottom: 96px;
  font-family: ${({ theme }) => theme.fonts.text};

  @media (max-width: 800px) {
    margin-bottom: 32px;
    width: 100%;
    text-align: justify;
  }
`;

export const GraySection = styled('div')`
  background-color: ${({ theme }) => theme.colors.darkLight};
  padding: 144px 0;
  transition: background 0.5s ease-in-out;

  @media (max-width: 800px) {
    padding: 0;
  }
`;

export const VideoBandsContainer = styled('div')`
  width: 80%;
  margin: auto;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  padding-right: 0;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
