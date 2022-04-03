import React from 'react';
import { Helmet } from 'react-helmet';
import { Band, Container, Intro, Title } from './styles';
import clipThumbnail from '../../assets/images/thumbnails/clip.jpg';
import liveThumbnail from '../../assets/images/thumbnails/live.jpg';
import afterMovieThumbnail from '../../assets/images/thumbnails/aftermovie.jpg';
import CaptionedVideo from '../../molecules/captionedVideo/CaptionedVideo';

function Clip() {
  return (
    <Container>
      <Helmet>
        <title>Les clips Toukan Production</title>
      </Helmet>
      <Band>
        <Title>Les clips</Title>
        <Intro>
          Nous vous proposons plusieurs types de clips différents selon
          l’ambiance souhaité, votre profil ou encore la mise en scène désirée.
          entre le clip <strong>cinématique</strong>, le <strong>live</strong>{' '}
          ou l’
          <strong>aftermovie</strong>, chacun d’entre eux répondront à des
          attentes différentes selon votre profil et vos projets.
        </Intro>
      </Band>
      <CaptionedVideo
        src="https://toukan-cdn.cchampou.me/content/clip/clip-demo/manifest.mpd"
        title="Cinématique"
        poster={clipThumbnail}
      >
        Le Clips Cinématique est fréquemment utilisé dans le milieu{' '}
        <strong>musical</strong> mais également <strong>artistique</strong> ou
        même <strong>sportif</strong>. Souvent mis en scène pour raconter une
        histoire, une idée ou simplement une direction artistique.
      </CaptionedVideo>
      <CaptionedVideo
        src="https://toukan-cdn.cchampou.me/content/clip/live/manifest.mpd"
        title="Live"
        poster={liveThumbnail}
        reverse
      >
        Les lives sont des moments uniques souvent liés au milieu{' '}
        <strong>musical</strong> et <strong>événementiel</strong> qui nécessite
        une expertise de captation vidéo très pointue. La prise doit être
        parfaite car chaque moment loupé à l’image est irremplaçable.
      </CaptionedVideo>
      <CaptionedVideo
        src="https://toukan-cdn.cchampou.me/content/clip/aftermovie/manifest.mpd"
        title="Aftermovie"
        poster={afterMovieThumbnail}
      >
        L’aftermovie est un genre très recherché dans le monde{' '}
        <strong>festif</strong> et <strong>evenementiel</strong>. Souvent
        accompagné d’un <strong>montage dynamique</strong> de précision, la
        musique est un réel choix de direction artistique propre à chaques
        établissements ou ambiance souhaitée.
      </CaptionedVideo>
    </Container>
  );
}

export default Clip;
