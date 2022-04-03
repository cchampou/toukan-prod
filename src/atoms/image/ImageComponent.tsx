import React, { useLayoutEffect, useRef } from 'react';
import styled from '@emotion/styled';
import Loader from '../loader/Loader';

type Props = {
  src: string;
  alt: string;
};

const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ImageComponent({ src, alt }: Props) {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const image = new Image();
    image.src = src;
    image.alt = alt;
    image.onload = () => {
      if (container.current) {
        container.current.innerHTML = '';
        container.current.appendChild(image);
      }
    };
  }, [src]);

  return (
    <Container ref={container}>
      <Loader />
    </Container>
  );
}

export default ImageComponent;
