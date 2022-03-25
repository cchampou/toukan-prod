import styled from '@emotion/styled';

export const Container = styled('div')`
  position: relative;

  video {
    max-height: 100%;
    max-width: 100%;
  }
`;

export const Play = styled('div')`
  height: 64px;
  width: 64px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.darkLight};
  color: ${({ theme }) => theme.colors.lightDark};
  font-size: 24px;
  position: absolute;
  text-align: center;
  opacity: 0.75;

  svg {
    position: relative;
    top: 50%;
    margin: auto;
    transform: translateY(-50%);
  }
`;
