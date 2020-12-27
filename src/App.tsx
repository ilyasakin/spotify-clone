import { Suspense, lazy, useState } from 'react';
import './styles/App.scss';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './screens/Login';
import UserContext from './context/User';
import Auth from './components/Auth/Auth';
import Loading from './screens/Loading/Loading';

const App: React.FC = () => {
  const [user, setUser] = useState<{ email?: string; name?: string; token?: string }>({});

  const OverviewLazy = lazy(() => import('./screens/Overview'));
  const PlayerLazy = lazy(() => import('./screens/Player'));
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Auth>
            <Route path="/overview">
              <Suspense fallback={<Loading message="Loading Overview" />}>
                <OverviewLazy />
              </Suspense>
            </Route>
            <Route path="/player">
              <Suspense fallback={<Loading message="Loading Player" />}>
                <PlayerLazy />
              </Suspense>
            </Route>
          </Auth>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
