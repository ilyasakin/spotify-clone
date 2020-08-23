import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import './styles/App.scss';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Player from './screens/Player';
import Login from './screens/Login';
import UserContext from './context/User';
import Overview from './screens/Overview';

function App() {
  const [user, setUser] = useState<{ email?: string; name?: string; token?: string }>({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/overview">
            <Overview />
          </Route>
          <Route path="/player">
            <Player />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default hot(App);
