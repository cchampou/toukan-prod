import React from 'react';
import { Container, Split } from '../clip/styles';
import Video from '../../molecules/video/Video';
import droneThumbnail from '../../assets/images/thumbnails/drone.jpg';
import fpvThumbnail from '../../assets/images/thumbnails/fpv.jpg';

function Drone() {
  return (
    <Container>
      <h1>Drones</h1>
      <p style={{ textAlign: 'center', width: '60%', margin: 'auto' }}>...</p>
      <Split>
        <p style={{ textAlign: 'right' }}>
          <h2 style={{ textAlign: 'right', margin: 0 }}>Cinématique</h2>
          ...
        </p>
        <Video
          type="video/mp4"
          src="https://toukan-production.s3.eu-west-3.amazonaws.com/clip-demo.mp4"
          poster={droneThumbnail}
        />
      </Split>

      <Split>
        <Video
          type="video/mp4"
          src="https://toukan-production.s3.eu-west-3.amazonaws.com/live.mp4"
          poster={fpvThumbnail}
        />
        <p>
          <h2 style={{ textAlign: 'left', margin: 0 }}>FPV</h2>
          ...
        </p>
      </Split>
    </Container>
  );
}

export default Drone;
