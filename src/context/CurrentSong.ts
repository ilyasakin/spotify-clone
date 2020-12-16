import { createContext, Dispatch, SetStateAction } from 'react';
import Song from '../types/Song';

interface Props {
  currentSong: Song;
  setCurrentSong: Dispatch<SetStateAction<Song>>;
}

const CurrentSong = createContext<Partial<Props>>({});

export default CurrentSong;
