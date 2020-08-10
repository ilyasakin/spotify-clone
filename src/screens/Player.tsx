import React, { useState } from 'react';
import '../styles/App.scss';
import Navbar from '../components/navbar/navbar';
import Nowplaying from '../components/nowplaying/nowplaying';
import Topbar from '../components/topbar/topbar';
import Main from '../components/main/main';
import CurrentSong from '../context/CurrentSong';
import Volume from '../context/Volume';

const Player = () => {
  const [currentSong, setCurrentSong] = useState({});
  const [volume, setVolume] = useState(1);

  return (
    <div>
      <Navbar />
      <Topbar />
      <CurrentSong.Provider value={{ currentSong, setCurrentSong }}>
        <Volume.Provider value={{ volume, setVolume }}>
          <Nowplaying />
        </Volume.Provider>
        <Main />
      </CurrentSong.Provider>
    </div>
  );
};

export default Player;
