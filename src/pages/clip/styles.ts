import styled from '@emotion/styled';

export const Container = styled('div')`
  width: 100%;
  margin: auto;
  padding: 0;
  padding-top: 96px;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  transition: all 0.5s ease-in-out;
  min-height: calc(100vh - 244px);
`;

export const Band = styled('div')`
  background-color: ${({ theme }) => theme.colors.darkLight};
  padding: 96px 0;
`;

export const Split = styled('div')`
  display: flex;
  padding: 96px 0;
  width: 80%;
  margin: auto;
  align-items: flex-end;

  p {
    width: 40%;
    margin-bottom: 96px;
  }

  div {
    margin: auto;
    width: 50%;
  }
`;
