import React, { useState } from 'react';
import '../styles/App.scss';
import Navbar from '../components/Navbar/Navbar';
import Nowplaying from '../components/Nowplaying/Nowplaying';
import Topbar from '../components/Topbar/Topbar';
import Main from '../components/Main/Main';
import CurrentSong from '../context/CurrentSong';
import Volume from '../context/Volume';
import Auth from '../components/Auth/Auth';

const Player = () => {
  document.title = 'Spotify';
  const [currentSong, setCurrentSong] = useState({});

  const initialVolume = () => {
    const volume = localStorage.getItem('VOLUME');
    if (volume !== null) {
      return parseFloat(volume);
    }
    return 1;
  };
  const [volume, setVolume] = useState(initialVolume());

  return (
    <Auth>
      <Navbar />
      <Topbar />
      <CurrentSong.Provider value={{ currentSong, setCurrentSong }}>
        <Volume.Provider value={{ volume, setVolume }}>
          <Nowplaying />
        </Volume.Provider>
        <Main />
      </CurrentSong.Provider>
    </Auth>
  );
};

export default Player;