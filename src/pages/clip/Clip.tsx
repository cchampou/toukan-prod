import React from 'react';
import { Container, Split } from './styles';

function Clip() {
  return (
    <Container>
      <h1>Clips</h1>
      <p>
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
        <video controls>
          <source
            type="video/mp4"
            src="https://toukan-production.s3.eu-west-3.amazonaws.com/Clip Demo.mp4"
          />
        </video>
      </Split>
      <Split>
        <video controls>
          <source
            type="video/mp4"
            src="https://toukan-production.s3.eu-west-3.amazonaws.com/Live Demo.mp4"
          />
        </video>
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
        <video controls>
          <source
            type="video/mp4"
            src="https://toukan-production.s3.eu-west-3.amazonaws.com/Aftermovie Demo.mp4"
          />
        </video>
      </Split>
    </Container>
  );
}

export default Clip;
