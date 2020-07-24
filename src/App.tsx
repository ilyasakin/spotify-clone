import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import './styles/App.scss';
import Navbar from './components/navbar/navbar';
import Nowplaying from './components/nowplaying/nowplaying';
import Topbar from './components/topbar/topbar';
import Main from './components/main/main';
import CurrentSong from './context/CurrentSong';

function App() {
  const [currentSong, setCurrentSong] = useState({});

  return (
    <div>
      <Navbar />
      <Topbar />
      <CurrentSong.Provider value={{ currentSong, setCurrentSong }}>
        <Nowplaying />
        <Main />
      </CurrentSong.Provider>
    </div>
  );
}

export default hot(App);
