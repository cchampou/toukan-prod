import React from 'react';
import { Container } from '../clip/styles';
import Video from '../../molecules/video/Video';
import droneThumbnail from '../../assets/images/thumbnails/drone.jpg';

function Drone() {
  return (
    <Container>
      <h1>Drones</h1>
      <h2>Cinématique</h2>
      <Video
        type="video/mp4"
        src="https://toukan-production.s3.eu-west-3.amazonaws.com/clip-demo.mp4"
        poster={droneThumbnail}
      />
    </Container>
  );
}

export default Drone;
