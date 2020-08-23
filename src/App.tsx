import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import './styles/App.scss';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Player from './screens/Player';
import Login from './screens/Login';
import UserContext from './context/User';
import Overview from './screens/Overview';
import Auth from './components/Auth/Auth';

function App() {
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
}

export default hot(App);
