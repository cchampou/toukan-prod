import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import toukan from '../../assets/images/toukan192.png';

const Container = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.1;
  }
`;

const Toukan = styled('img')`
  width: 96px !important;
  height: 96px !important;
  animation: ${fadeInOut} 2s ease-in-out infinite;
`;

function Loader() {
  return (
    <Container>
      <Toukan src={toukan} alt="Toukan loader" />
    </Container>
  );
}

export default Loader;
