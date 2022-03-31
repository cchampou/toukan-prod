import React from 'react';
import PortfolioTemplate from './PortfolioTemplate';
import { Entry } from './types';

const images: Entry[] = [];

function PortfolioIllustration() {
  return <PortfolioTemplate images={images} />;
}

export default PortfolioIllustration;
