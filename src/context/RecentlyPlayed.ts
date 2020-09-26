import { createContext, Dispatch, SetStateAction } from 'react';
import Song from '../types/Song';

interface Props {
  recentlyPlayed: Song[];
  setRecentlyPlayed: Dispatch<SetStateAction<Song[]>>;
}

const RecentlyPlayed = createContext<Partial<Props>>({});

export default RecentlyPlayed;
