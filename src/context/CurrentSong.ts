import { createContext, Dispatch, SetStateAction } from 'react';

interface Props {
  currentSong: {
    _id?: string;
    id?: number;
    name?: string;
    artist?: string;
    cover?: string;
    location?: string;
  };
  setCurrentSong: Dispatch<SetStateAction<{}>>;
}

const CurrentSong = createContext<Partial<Props>>({});

export default CurrentSong;
