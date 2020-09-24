import React, { useState } from 'react';
import CurrentSong from '../../context/CurrentSong';
import Volume from '../../context/Volume';
import PlayingStatus from '../../context/PlayingStatus';

const CombinedProvider: React.FC = ({ children }) => {
  const [currentSong, setCurrentSong] = useState({});
  const [playing, setPlaying] = useState(false);

  const initialVolume = () => {
    const volume = localStorage.getItem('VOLUME');
    if (volume !== null) {
      return parseFloat(volume);
    }
    return 1;
  };
  const [volume, setVolume] = useState(initialVolume());
  return (
    <CurrentSong.Provider value={{ currentSong, setCurrentSong }}>
      <PlayingStatus.Provider value={{ playing, setPlaying }}>
        <Volume.Provider value={{ volume, setVolume }}>{children} </Volume.Provider>
      </PlayingStatus.Provider>
    </CurrentSong.Provider>
  );
};

export default CombinedProvider;
