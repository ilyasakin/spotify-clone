import '../styles/App.scss';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import styles from '../styles/Player.module.scss';
import Navbar from '../components/Navbar/Navbar';
import Nowplaying from '../components/Nowplaying/Nowplaying';
import Topbar from '../components/Topbar/Topbar';
import Main from '../components/Main/Main';
import Search from '../components/Search/Search';
import CombinedProvider from '../components/CombinedProvider/CombinedProvider';
import ViewPlaylist from '../components/ViewPlaylist/ViewPlaylist';

const Player: React.FC = () => {
  document.title = 'Spotify';

  const match = useRouteMatch();

  return (
    <CombinedProvider>
      <div className={styles['main-container']}>
        <div className={styles['nav-content']}>
          <Navbar />
          <div className={styles['topbar-main']}>
            <Topbar />
            <Switch>
              <Route path={`${match.path}/home`}>
                <Main />
              </Route>
              <Route path={`${match.path}/search`}>
                <Search />
              </Route>
              <Route path={`${match.path}/playlist`}>
                <ViewPlaylist />
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
