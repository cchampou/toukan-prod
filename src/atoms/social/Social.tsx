import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type Props = {
  icon: IconDefinition;
  link: string;
};

function Social({ icon, link }: Props) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

export default Social;
