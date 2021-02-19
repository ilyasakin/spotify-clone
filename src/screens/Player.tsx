import '../styles/App.scss';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Player.module.scss';
import Navbar from '../components/Navbar/Navbar';
import Nowplaying from '../containers/Nowplaying/Nowplaying';
import Topbar from '../components/Topbar/Topbar';
import Main from '../containers/Main/Main';
import CombinedProvider from '../components/CombinedProvider/CombinedProvider';
import Search from '../containers/Search/Search';
import ViewPlaylist from '../containers/ViewPlaylist/ViewPlaylist';
import LikedSongs from '../components/LikedSongs/LikedSongs';
import Song from '../types/Song';

const Player: React.FC = () => {
  document.title = 'Spotify';

  const match = useRouteMatch();

  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1/music`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('__TOKEN')}` },
      });
      setSongs(response.data);
    };

    fetchData();
  }, []);
  return (
    <CombinedProvider>
      <div className={styles['main-container']}>
        <div className={styles['nav-content']}>
          <Navbar />
          <div className={styles['topbar-main']}>
            <Topbar />
            <Switch>
              <Route path={`${match.path}/home`}>
                <Main songs={songs} />
              </Route>
              <Route path={`${match.path}/search`}>
                <Search />
              </Route>
              <Route path={`${match.path}/playlist`}>
                <ViewPlaylist />
              </Route>
              <Route path={`${match.path}/liked-songs`}>
                <LikedSongs />
              </Route>
              <Route path={`${match.path}/`}>
                <Redirect to={`${match.url}/home`} />
              </Route>
            </Switch>
          </div>
        </div>
        <Nowplaying />
      </div>
    </CombinedProvider>
  );
};

export default Player;
