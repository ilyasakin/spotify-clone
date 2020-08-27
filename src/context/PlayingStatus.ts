import { createContext, Dispatch, SetStateAction } from 'react';

interface Props {
  playing: boolean;
  setPlaying: Dispatch<SetStateAction<boolean>>;
}

const PlayingStatus = createContext<Partial<Props>>({});

export default PlayingStatus;
