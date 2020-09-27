import React, { useState } from 'react';
import CurrentSong from '../../context/CurrentSong';
import Volume from '../../context/Volume';
import PlayingStatus from '../../context/PlayingStatus';
import RecentlyPlayed from '../../context/RecentlyPlayed';
import Song from '../../types/Song';
import Search from '../../context/Search';

const CombinedProvider: React.FC = ({ children }) => {
  const [recentlyPlayed, setRecentlyPlayed] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState({});
  const [playing, setPlaying] = useState(false);
  const [search, setSearch] = useState('');

  const initialVolume = () => {
    const volume = localStorage.getItem('VOLUME');
    if (volume !== null) {
      return parseFloat(volume);
    }
    return 1;
  };
  const [volume, setVolume] = useState(initialVolume());
  return (
    <Search.Provider value={{ search, setSearch }}>
      <RecentlyPlayed.Provider value={{ recentlyPlayed, setRecentlyPlayed }}>
        <CurrentSong.Provider value={{ currentSong, setCurrentSong }}>
          <PlayingStatus.Provider value={{ playing, setPlaying }}>
            <Volume.Provider value={{ volume, setVolume }}>{children}</Volume.Provider>
          </PlayingStatus.Provider>
        </CurrentSong.Provider>
      </RecentlyPlayed.Provider>
    </Search.Provider>
  );
};

export default CombinedProvider;
