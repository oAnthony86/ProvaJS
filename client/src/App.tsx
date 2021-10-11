import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages';
import { ClientList } from './pages/client';
import { ClientCreate } from './pages/client/create';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/cliente" component={ClientList} />
                <Route exact path="/cliente/create" component={ClientCreate} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
