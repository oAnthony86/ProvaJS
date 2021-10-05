import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, ClientList } from './pages';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/cliente" component={ClientList} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
