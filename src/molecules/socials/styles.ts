import styled from '@emotion/styled';
import { mobileOnly } from '../../styles/theme';

type Props = {
  show: boolean;
};

export const SocialContainer = styled('div')<Props>`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 24px;
  transform: translateX(10%);
  top: 50%;
  position: fixed;
  right: 0;
  transform: ${({ show }) =>
    show ? 'translate(0%, -50%)' : 'translate(100%, -50%)'};
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  z-index: 5;

  a {
    padding: 16px;
    text-align: center;
  }

  ${mobileOnly} {
    font-size: 16px;
    display: none;

    a {
      padding: 8px;
    }
  }
`;
