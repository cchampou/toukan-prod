import styled from '@emotion/styled';

export const RentalItemContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  max-width: 300px;
  margin: 2rem;
`;

export const RentalImageContainer = styled('div')`
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
  justify-self: flex-start;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
  }
`;
