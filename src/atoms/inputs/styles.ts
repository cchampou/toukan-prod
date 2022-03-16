import styled from '@emotion/styled';
import { css } from '@emotion/react';

const common = css`
  padding: 8px 16px;
  background: none;
  font-weight: 500;
  margin-top: 8px;
  border-width: 2px;
  border-style: solid;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const StyledInput = styled('input')`
  border-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.dark};
  ${common}
`;

export const StyledTextArea = styled('textarea')`
  border: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.dark};
  ${common}
`;
