import React from 'react';
import { Container, Split } from './styles';
import Video from '../../molecules/video/Video';

function Clip() {
  return (
    <Container>
      <h1>Clips</h1>
      <p style={{ textAlign: 'center', width: '60%', margin: 'auto' }}>
        Nous vous proposons plusieurs types de clips différents selon l’ambiance
        souhaité, votre profil ou encore la mise en scène désirée. entre le clip{' '}
        <strong>cinématique</strong>, le <strong>live</strong> ou l’
        <strong>aftermovie</strong>, chacun d’entre eux répondront à des
        attentes différentes selon votre profil et vos projets.
      </p>
      <Split>
        <p>
          Le Clips Cinématique est fréquemment utilisé dans le milieu{' '}
          <strong>musical</strong> mais également <strong>artistique</strong> ou
          même <strong>sportif</strong>. Souvent mis en scène pour raconter une
          histoire, une idée ou simplement une direction artistique.
        </p>
        <Video
          type="video/mp4"
          src="https://toukan-production.s3.eu-west-3.amazonaws.com/clip-demo.mp4"
        />
      </Split>
      <Split>
        <Video
          type="video/mp4"
          src="https://toukan-production.s3.eu-west-3.amazonaws.com/live.mp4"
        />
        <p>
          Les lives sont des moments uniques souvent liés au milieu{' '}
          <strong>musical</strong> et <strong>événementiel</strong> qui
          nécessite une expertise de captation vidéo très pointue. La prise doit
          être parfaite car chaque moment loupé à l’image est irremplaçable.
        </p>
      </Split>
      <Split>
        <p>
          L’aftermovie est un genre très recherché dans le monde{' '}
          <strong>festif</strong> et <strong>evenementiel</strong>. Souvent
          accompagné d’un <strong>montage dynamique</strong> de précision, la
          musique est un réel choix de direction artistique propre à chaques
          établissements ou ambiance souhaitée.
        </p>
        <Video
          type="video/mp4"
          src="https://toukan-production.s3.eu-west-3.amazonaws.com/AfterMovie Demo.mp4"
        />
      </Split>
    </Container>
  );
}

export default Clip;
