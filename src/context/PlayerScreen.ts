import { createContext, Dispatch, SetStateAction } from 'react';

interface Props {
  currentScreen: 'Home' | 'Search' | 'Library';
  setCurrentScreen: Dispatch<SetStateAction<'Home' | 'Search' | 'Library'>>;
}

const PlayerScreen = createContext<Partial<Props>>({});

export default PlayerScreen;
