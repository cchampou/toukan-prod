import React, { useLayoutEffect, useRef } from 'react';
import logoWhite from '../../assets/logo-white.png';
import monitor from '../../assets/monitor.jpg';
import Scroll from '../../atoms/scroll/Scroll';
import './styles.css';
import useTopNavVisibility from '../../hooks/useTopNavVisibility';
import {
  ContentContainer,
  PresentationContainer,
  PresentationFlex,
  PresentationParagraph,
} from './styles';
import useHoverPlay from '../../hooks/useHoverPlay';

function Homepage() {
  const { isScrolled } = useTopNavVisibility();
  const mainPlayer = useRef<HTMLVideoElement>();
  const randomStartFlag = useRef(false);
  const { playerRef: playerRefCorpo } = useHoverPlay();
  const { playerRef: playerRefClip } = useHoverPlay();
  const { playerRef: playerRefDrone } = useHoverPlay();

  useLayoutEffect(() => {
    const percent = Math.random();
    mainPlayer.current.addEventListener('canplay', () => {
      if (!randomStartFlag.current) {
        const targetTc = Math.ceil(mainPlayer.current.duration * percent);
        mainPlayer.current.currentTime = targetTc;
        mainPlayer.current.play();
        randomStartFlag.current = true;
      }
    });
  }, []);

  return (
    <>
      <video id="homepage-video" ref={mainPlayer} loop muted>
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
        <div id="homepage-gray-section">
          <div id="homepage-video-bands-container">
            <video ref={playerRefCorpo} className="video-band" loop muted>
              <h2>Test</h2>
              <source src="https://toukan-production.s3.eu-west-3.amazonaws.com/corpo.mp4" />
            </video>
            <video ref={playerRefClip} className="video-band" loop muted>
              <source src="https://toukan-production.s3.eu-west-3.amazonaws.com/clip.mp4" />
            </video>
            <video ref={playerRefDrone} className="video-band" loop muted>
              <source src="https://toukan-production.s3.eu-west-3.amazonaws.com/drone.mp4" />
            </video>
          </div>
        </div>
      </ContentContainer>
    </>
  );
}

export default Homepage;
