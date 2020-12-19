import '../styles/App.scss';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import styles from '../styles/Player.module.scss';
import Navbar from '../components/Navbar/Navbar';
import Nowplaying from '../components/Nowplaying/Nowplaying';
import Topbar from '../components/Topbar/Topbar';
import Main from '../components/Main/Main';
import CombinedProvider from '../components/CombinedProvider/CombinedProvider';
import Loading from '../components/Loading/Loading';

const Player: React.FC = () => {
  document.title = 'Spotify';

  const match = useRouteMatch();

  const SearchLazy = lazy(() => import('../components/Search/Search'));
  const ViewPlaylistLazy = lazy(() => import('../components/ViewPlaylist/ViewPlaylist'));
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
                <Suspense fallback={<Loading />}>
                  <SearchLazy />
                </Suspense>
              </Route>
              <Route path={`${match.path}/playlist`}>
                <Suspense fallback={<Loading />}>
                  <ViewPlaylistLazy />
                </Suspense>
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
