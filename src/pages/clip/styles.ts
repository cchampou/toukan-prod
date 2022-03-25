import styled from '@emotion/styled';

export const Container = styled('div')`
  width: 80%;
  margin: auto;
  padding: 0 10%;
  padding-top: 96px;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  transition: all 0.5s ease-in-out;
  min-height: calc(100vh - 244px);
`;

export const Split = styled('div')`
  display: flex;
  padding: 128px 0;
  align-items: flex-end;

  p {
    width: 40%;
    margin-bottom: 96px;
  }

  video {
    margin: auto;
    width: 50%;
  }
`;
