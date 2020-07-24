import { createContext } from 'react';

interface Props {
  currentSong: Record<string, any>;
  setCurrentSong: () => {};
}
// eslint-disable-next-line import/prefer-default-export
export const CurrentSong = createContext<Partial<Props>>({});
