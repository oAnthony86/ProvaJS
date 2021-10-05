import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home/index';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={Home} />
          </Switch>
      </Router>
  );
}

export default App;
