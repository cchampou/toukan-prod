import styled from '@emotion/styled';
import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Overlay = styled('p')`
  background-color: black;
  color: white;
  position: fixed;
  z-index: 999;
  top: 16px;
  left: 16px;
  padding: 16px;
  font-family: sans-serif;
  opacity: 0.75;
`;

function Debug() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [params] = useSearchParams();

  const scrollUpdater = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollUpdater);

    return () => {
      window.removeEventListener('scroll', scrollUpdater);
    };
  }, []);

  return params.get('debug') === 'true' ? (
    <Overlay>Scroll: ${scrollY.toString(10)};</Overlay>
  ) : null;
}

export default Debug;
