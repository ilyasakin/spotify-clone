import { useState } from 'react';
import './styles/App.scss';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Player from './screens/Player';
import Login from './screens/Login';
import UserContext from './context/User';
import Overview from './screens/Overview';
import Auth from './components/Auth/Auth';

const App: React.FC = () => {
  const [user, setUser] = useState<{ email?: string; name?: string; token?: string }>({});

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
              <Overview />
            </Route>
            <Route path="/player">
              <Player />
            </Route>
          </Auth>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
