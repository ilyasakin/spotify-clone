import React, { useState } from 'react';
import '../styles/App.scss';
import '../styles/Player.scss';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Nowplaying from '../components/Nowplaying/Nowplaying';
import Topbar from '../components/Topbar/Topbar';
import Main from '../components/Main/Main';
import CurrentSong from '../context/CurrentSong';
import Volume from '../context/Volume';
import PlayingStatus from '../context/PlayingStatus';
import Search from '../components/Search/Search';

const Player = () => {
  document.title = 'Spotify';
  const [currentSong, setCurrentSong] = useState({});
  const [playing, setPlaying] = useState(false);
  const match = useRouteMatch();

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
        <Volume.Provider value={{ volume, setVolume }}>
          <div className="main-container">
            <div className="nav-content">
              <Navbar />
              <div className="topbar-main">
                <Topbar />
                <Switch>
                  <Route path={`${match.path}/home`}>
                    <Main />
                  </Route>
                  <Route path={`${match.path}/search`}>
                    <Search />
                  </Route>
                  <Route path={`${match.path}/`}>
                    <Redirect to={`${match.url}/home`} />
                  </Route>
                </Switch>
              </div>
            </div>
            <Nowplaying />
          </div>
        </Volume.Provider>
      </PlayingStatus.Provider>
    </CurrentSong.Provider>
  );
};

export default Player;
