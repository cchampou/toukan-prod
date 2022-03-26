import React from 'react';

import logoWhite from '../../assets/logo-white.png';
import monitor from '../../assets/images/monitor.jpg';
import Scroll from '../../atoms/scroll/Scroll';
import './styles.css';
import useTopNavVisibility from '../../hooks/useTopNavVisibility';
import {
  ContentContainer,
  GraySection,
  PresentationContainer,
  PresentationFlex,
  PresentationParagraph,
  VideoBandsContainer,
} from './styles';
import VideoBand from '../../atoms/videoBand/VideoBand';

function Homepage() {
  const { isScrolled } = useTopNavVisibility();

  return (
    <>
      <video id="homepage-video" loop muted autoPlay>
        <source
          src={`https://toukan-production.s3.eu-west-3.amazonaws.com/toukan.webm#t=${Math.ceil(
            232 * Math.random()
          )}`}
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
          <PresentationFlex>
            <PresentationParagraph>
              Toukan est une boite de production audiovisuelle spéacialisée dans
              la <strong>mise en scène</strong>, la{' '}
              <strong>colorimétrie</strong> et le <strong>télépilotage</strong>{' '}
              de drone. Nous vous proposons un vaste choix de prestations afin
              de doner vie à vos idées et vos projets par le biais d’une vidéos
              qui répondra parfaitement à vos attentes et éxigences
              <br />
              <br />
              Je propose à mes clients, mon expertise et ma créativité dans le
              domaine de la <strong>vidéo</strong>, la <strong>photo</strong>,
              et l’
              <strong>illustration</strong>, mais également un suivi
              personnalisé durant toute la partie de développement du projet.
            </PresentationParagraph>
            <img src={monitor} alt="Moi, moniteur" />
          </PresentationFlex>
        </PresentationContainer>
        <GraySection>
          <VideoBandsContainer>
            <VideoBand
              videoSource="https://toukan-production.s3.eu-west-3.amazonaws.com/corpo.mp4"
              text="Corporate"
              linkTo="/corpo"
            />
            <VideoBand
              videoSource="https://toukan-production.s3.eu-west-3.amazonaws.com/clip.mp4"
              text="Clip"
              linkTo="/clip"
            />
            <VideoBand
              videoSource="https://toukan-production.s3.eu-west-3.amazonaws.com/drone.mp4"
              text="Drone"
              linkTo="/drone"
            />
          </VideoBandsContainer>
        </GraySection>
      </ContentContainer>
    </>
  );
}

export default Homepage;
