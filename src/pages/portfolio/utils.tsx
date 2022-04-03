import { Entry } from './types';

export const getEntryContent = ({ youtubeId, fullImage, url }: Entry) =>
  youtubeId || fullImage || url;
