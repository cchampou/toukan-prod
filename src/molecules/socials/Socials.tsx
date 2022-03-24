import React from 'react';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Social from '../../atoms/social/Social';
import { SocialContainer } from './styles';
import useTopNavVisibility from '../../hooks/useTopNavVisibility';

function Socials() {
  const { isMouseTop, isScrolled } = useTopNavVisibility();

  return (
    <SocialContainer show={isMouseTop || isScrolled}>
      <Social
        link="https://www.instagram.com/toukan.production/"
        icon={faInstagram}
      />
      <Social
        link="https://www.youtube.com/channel/UCawf7QGuOERTLUWHo4w6bRA"
        icon={faYoutube}
      />
      <Social
        link="https://www.linkedin.com/in/r%C3%A9mi-portalis-8610451a4/"
        icon={faLinkedin}
      />
      <Social
        link="https://www.facebook.com/Toukan-Production-415279995996924"
        icon={faFacebook}
      />
    </SocialContainer>
  );
}

export default Socials;
