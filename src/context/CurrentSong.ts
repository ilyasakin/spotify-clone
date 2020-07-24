import { createContext, Dispatch, SetStateAction } from 'react';

interface Props {
  currentSong: Record<string, never>;
  setCurrentSong: Dispatch<SetStateAction<{}>>;
}

const CurrentSong = createContext<Partial<Props>>({});

export default CurrentSong;
