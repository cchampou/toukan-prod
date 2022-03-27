import React from 'react';
import { Band, Container, Intro, Title } from '../clip/styles';
import droneThumbnail from '../../assets/images/thumbnails/drone.jpg';
import fpvThumbnail from '../../assets/images/thumbnails/fpv.jpg';
import CaptionedVideo from '../../molecules/captionedVideo/CaptionedVideo';

function Drone() {
  return (
    <Container>
      <Band>
        <Title>Les Drones</Title>
        <Intro>
          Ayant passé ma <strong>licence professionnelle</strong> de{' '}
          <strong>télépilote de drone</strong>, je vous propose d’inclure dans
          vos vidéos de magnifiques plans aériens. Le drone est devenu un outil
          très convoité dans le milieu de la vidéo, que ce soit pour des{' '}
          <strong>mariages</strong>, des <strong>clips</strong>, du{' '}
          <strong>cinéma</strong>, et des vidéos <strong>corporates</strong>.
        </Intro>
      </Band>
      <CaptionedVideo
        src="https://toukan-production.s3.eu-west-3.amazonaws.com/Drone Demo.mp4"
        title="Cinématique"
        poster={droneThumbnail}
      >
        Le drone dit “Cinématique”, est tout simplement un drone{' '}
        <strong>stabilisé</strong> qui permet de faire des images{' '}
        <strong>calmes</strong> et <strong>fluides</strong> et de long{' '}
        <strong>travelings</strong>. Parfait pour de belles transitions et
        ouvertures de vos vidéos.
      </CaptionedVideo>
      <CaptionedVideo
        src="https://toukan-production.s3.eu-west-3.amazonaws.com/FPV Demo.mp4"
        title="FPV"
        poster={fpvThumbnail}
        reverse
      >
        Le FPV est une catégorie bien particulière du drone qui permettra des
        plans <strong>inédits</strong> pour vos projets. Que ce soit pour des
        vidéos <strong>sportives</strong>, des <strong>clips</strong> ou des
        vidéos <strong>corporates</strong>, le FPV se démocratise de plus en
        plus dans le milieu de l’audiovisuel.
        <br />
        <em>Pour en savoir plus, cliquez ici.</em>
      </CaptionedVideo>
    </Container>
  );
}

export default Drone;
