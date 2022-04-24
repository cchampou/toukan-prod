import React from 'react';
import { Helmet } from 'react-helmet';

import logoWhite from '../../assets/logo-white.webp';
import monitor from '../../assets/images/monitor.webp';
import Scroll from '../../atoms/scroll/Scroll';
import useTopNavVisibility from '../../hooks/useTopNavVisibility';
import corpoThumbnail from '../../assets/images/homepage/corpo-thumbnail.jpg';
import clipThumbnail from '../../assets/images/homepage/clip.jpg';
import droneThumbnail from '../../assets/images/homepage/drone.jpg';
import {
  ContentContainer,
  GraySection,
  HomepageLogo,
  HomepageVideo,
  PresentationContainer,
  PresentationFlex,
  PresentationImage,
  PresentationImageWrapper,
  PresentationParagraph,
  ScrollCTAContainer,
  VideoBandsContainer,
} from './styles';
import VideoBand from '../../atoms/videoBand/VideoBand';
import Debug from '../../atoms/debug/Debug';

function Homepage() {
  const { isScrolled } = useTopNavVisibility();

  return (
    <>
      <Helmet>
        <title>Toukan Production</title>
      </Helmet>
      <Debug />
      <HomepageVideo loop muted autoPlay>
        <source
          src={`https://toukan-cdn.cchampou.me/toukan.webm#t=${Math.ceil(
            232 * Math.random()
          )}`}
          type="video/webm"
        />
      </HomepageVideo>
      <HomepageLogo src={logoWhite} alt="Toukan Cinema" hide={isScrolled} />
      <ScrollCTAContainer>
        <Scroll />
      </ScrollCTAContainer>
      <ContentContainer style={{ marginTop: 0 }}>
        <PresentationContainer>
          <h2>PRÉSENTATION</h2>
          <PresentationFlex>
            <PresentationParagraph>
              Toukan est une boîte de production audiovisuelle spécialisée dans
              la <strong>mise en scène</strong>, la{' '}
              <strong>colorimétrie</strong> et le <strong>télépilotage</strong>{' '}
              de drone. Nous vous proposons un vaste choix de prestations afin
              de donner vie à vos idées et vos projets par le biais d’une vidéo
              qui répondra parfaitement à vos attentes et exigences
              <br />
              <br />
              Je propose à mes clients, mon expertise et ma créativité dans le
              domaine de la <strong>vidéo</strong>, la <strong>photo</strong>,
              et l’
              <strong>illustration</strong>, mais également un suivi
              personnalisé durant toute la partie de développement du projet.
            </PresentationParagraph>
            <PresentationImageWrapper>
              <PresentationImage
                src={monitor}
                alt="Moi, moniteur"
                height="auto"
                width="100%"
              />
            </PresentationImageWrapper>
          </PresentationFlex>
        </PresentationContainer>
        <GraySection>
          <VideoBandsContainer>
            <VideoBand
              videoSources={[
                ['https://toukan-cdn.cchampou.me/corpo.webm', 'video/webm'],
                ['https://toukan-cdn.cchampou.me/corpo.mp4', 'video/mp4'],
              ]}
              text="Corporate"
              linkTo="/corpo"
              poster={corpoThumbnail}
            />
            <VideoBand
              videoSources={[
                ['https://toukan-cdn.cchampou.me/clip.webm', 'video/webm'],
                ['https://toukan-cdn.cchampou.me/clip.mp4', 'video/mp4'],
              ]}
              text="Clip"
              linkTo="/clip"
              poster={clipThumbnail}
            />
            <VideoBand
              videoSources={[
                ['https://toukan-cdn.cchampou.me/drone.webm', 'video/webm'],
                ['https://toukan-cdn.cchampou.me/drone.mp4', 'video/mp4'],
              ]}
              text="Drone"
              linkTo="/drone"
              poster={droneThumbnail}
            />
          </VideoBandsContainer>
        </GraySection>
      </ContentContainer>
    </>
  );
}

export default Homepage;
