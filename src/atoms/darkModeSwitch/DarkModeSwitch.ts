import styled from '@emotion/styled';

export default styled('button')`
  margin-left: 80px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.2rem;
`;
