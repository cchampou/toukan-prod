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
  padding: 96px 10vw;
`;

export const PresentationFlex = styled('div')`
  display: flex;
  align-items: center;

  img {
    margin-left: 64px;
    width: 40%;
  }
`;

export const PresentationParagraph = styled('p')`
  width: 40vw;
  line-height: 1.5;
`;
