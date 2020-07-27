import { createContext, Dispatch, SetStateAction } from 'react';

interface Props {
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>;
}

const volume = createContext<Partial<Props>>({});

export default volume;
