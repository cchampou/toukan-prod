import React from 'react';
import { Container, Split } from '../clip/styles';
import Video from '../../molecules/video/Video';
import droneThumbnail from '../../assets/images/thumbnails/drone.jpg';
import fpvThumbnail from '../../assets/images/thumbnails/fpv.jpg';

function Drone() {
  return (
    <Container>
      <h1>Les Drones</h1>
      <p style={{ textAlign: 'center', width: '60%', margin: 'auto' }}>
        Ayant passé ma licence professionnelle de télépilote de drone, je vous
        propose d’inclure dans vos vidéos de magnifiques plans aériens. Le drone
        est devenu un outil très convoité dans le milieu de la vidéo, que ce
        soit pour des mariages, des clips, du cinéma, et des vidéos corporates.
      </p>
      <Split>
        <p style={{ textAlign: 'right' }}>
          <h2 style={{ textAlign: 'right', margin: 0 }}>Cinématique</h2>
          Le drone dit “Cinématique”, est tout simplement un drone stabilisé qui
          permet de faire des images calmes et fluides et de long travelings.
          Parfait pour de belles transitions et ouvertures de vos vidéos.
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
          plans inédits pour vos projets. Que ce soit pour des vidéos sportives,
          des clips ou des vidéos corporates, le FPV se démocratise de plus en
          plus dans le milieu de l’audiovisuel. Pour en savoir plus, cliquez
          ici.
        </p>
      </Split>
    </Container>
  );
}

export default Drone;
