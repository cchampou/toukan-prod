import styled from '@emotion/styled';
import { Button } from '../../atoms/callToAction/styles';
import { mobileOnly } from '../../styles/theme';

export const Columns = styled('div')`
  width: 80%;
  margin: auto;
  display: flex;

  ${mobileOnly} {
    flex-direction: column;
  }
`;

export const Form = styled('form')`
  flex: 1;
`;

export const Information = styled('section')`
  flex: 1;
`;

export const SendButton = styled(Button)`
  margin: 0;
`;
