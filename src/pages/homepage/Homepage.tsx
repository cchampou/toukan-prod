import React from 'react';
import logoWhite from '../../assets/logo-white.png';
import Scroll from '../../atoms/scroll/Scroll';
import './styles.css';
import useTopNavVisibility from '../../hooks/useTopNavVisibility';
import {
  ContentContainer,
  PresentationContainer,
  PresentationParagraph,
} from './styles';
import useHoverPlay from '../../hooks/useHoverPlay';

function Homepage() {
  const { isScrolled } = useTopNavVisibility();
  const { playerRef: playerRefCorpo } = useHoverPlay();
  const { playerRef: playerRefClip } = useHoverPlay();
  const { playerRef: playerRefDrone } = useHoverPlay();

  return (
    <>
      <video id="homepage-video" autoPlay loop muted>
        <source
          src="https://toukan-production.s3.eu-west-3.amazonaws.com/toukan.webm"
          type="video/webm"
        />
      </video>
      <img
        src={logoWhite}
        alt="Toukan Cinema"
        id="homepage-logo"
        className={`homepage-logo-default ${
          isScrolled ? 'homepage-logo-hide' : ''
        }`}
      />
      <div id="scroll-cta-container">
        <Scroll />
      </div>
      <ContentContainer>
        <PresentationContainer>
          <h2>PRÉSENTATION</h2>
          <PresentationParagraph>
            Toukan est une boite de production audiovisuelle spécialisée dans la{' '}
            <strong>mise en scène</strong>, la <strong>colorimétrie</strong> et
            le <strong>télépilotage de drone</strong>. Nous vous proposons un
            vaste choix de prestations pour vous ou votre entreprise afin
            d’embellir vos idées dans une ambiance cinématique des plus
            qualitative.
          </PresentationParagraph>
        </PresentationContainer>
        <video ref={playerRefCorpo} loop muted>
          <source src="https://toukan-production.s3.eu-west-3.amazonaws.com/corpo.mp4" />
        </video>
        <video ref={playerRefClip} loop muted>
          <source src="https://toukan-production.s3.eu-west-3.amazonaws.com/clip.mp4" />
        </video>
        <video ref={playerRefDrone} loop muted>
          <source src="https://toukan-production.s3.eu-west-3.amazonaws.com/drone.mp4" />
        </video>
      </ContentContainer>
    </>
  );
}

export default Homepage;
