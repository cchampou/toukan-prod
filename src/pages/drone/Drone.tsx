import React from 'react';
import { Band, Container, Split } from '../clip/styles';
import Video from '../../molecules/video/Video';
import droneThumbnail from '../../assets/images/thumbnails/drone.jpg';
import fpvThumbnail from '../../assets/images/thumbnails/fpv.jpg';

function Drone() {
  return (
    <Container>
      <Band>
        <h1 style={{ marginTop: 0 }}>Les Drones</h1>
        <p style={{ textAlign: 'center', width: '60%', margin: 'auto' }}>
          Ayant passé ma <strong>licence professionnelle</strong> de{' '}
          <strong>télépilote de drone</strong>, je vous propose d’inclure dans
          vos vidéos de magnifiques plans aériens. Le drone est devenu un outil
          très convoité dans le milieu de la vidéo, que ce soit pour des{' '}
          <strong>mariages</strong>, des <strong>clips</strong>, du{' '}
          <strong>cinéma</strong>, et des vidéos <strong>corporates</strong>.
        </p>
      </Band>
      <Split>
        <p style={{ textAlign: 'right' }}>
          <h2 style={{ textAlign: 'right', margin: 0 }}>Cinématique</h2>
          Le drone dit “Cinématique”, est tout simplement un drone{' '}
          <strong>stabilisé</strong> qui permet de faire des images{' '}
          <strong>calmes</strong> et <strong>fluides</strong> et de long{' '}
          <strong>travelings</strong>. Parfait pour de belles transitions et
          ouvertures de vos vidéos.
        </p>
        <Video
          type="video/mp4"
          src="https://toukan-production.s3.eu-west-3.amazonaws.com/Drone Demo.mp4"
          poster={droneThumbnail}
        />
      </Split>

      <Split>
        <Video
          type="video/mp4"
          src="https://toukan-production.s3.eu-west-3.amazonaws.com/FPV Demo.mp4"
          poster={fpvThumbnail}
        />
        <p>
          <h2 style={{ textAlign: 'left', margin: 0 }}>FPV</h2>
          Le FPV est une catégorie bien particulière du drone qui permettra des
          plans <strong>inédits</strong> pour vos projets. Que ce soit pour des
          vidéos <strong>sportives</strong>, des <strong>clips</strong> ou des
          vidéos <strong>corporates</strong>, le FPV se démocratise de plus en
          plus dans le milieu de l’audiovisuel.
          <br />
          <em>Pour en savoir plus, cliquez ici.</em>
        </p>
      </Split>
    </Container>
  );
}

export default Drone;
