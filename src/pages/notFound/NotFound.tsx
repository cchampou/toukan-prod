import React from 'react';
import { Helmet } from 'react-helmet';
import { ContentContainer } from '../homepage/styles';
import { Headline } from './styles';

function NotFound() {
  return (
    <ContentContainer>
      <Helmet>
        <title>Toukan introuvable</title>
      </Helmet>
      <Headline>Page introuvable</Headline>
    </ContentContainer>
  );
}

export default NotFound;
