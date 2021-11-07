import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';
import Menu from './components/superiorMenu.component';
import Home from './components/home.component';

import ClienteIndex from './pages/cliente/index';
import ClienteCreate from './pages/cliente/create';
import ClienteEdit from './pages/cliente/edit';

import TransportadoraIndex from './pages/transportadora/index';
import TransportadoraCreate from './pages/transportadora/create';
import TransportadoraEdit from './pages/transportadora/edit';

import ProdutoIndex from './pages/produto/index';
import ProdutoCreate from './pages/produto/create';
import ProdutoEdit from './pages/produto/edit';

import PedidoIndex from './pages/pedido/index';
import PedidoCreate from './pages/pedido/create';
import PedidoEdit from './pages/pedido/edit';

const App: React.FC = () => {
    return (
        <Router>
            <div className="container">
                <Menu />
                <br />

                <Switch>
                    <Route exact path='/cliente' component={ClienteIndex} />
                    <Route path='/cliente/create' component={ClienteCreate} />
                    <Route path='/cliente/edit/:id' component={ClienteEdit} />

                    <Route exact path='/transportadora' component={TransportadoraIndex} />
                    <Route path='/transportadora/create' component={TransportadoraCreate} />
                    <Route path='/transportadora/edit/:id' component={TransportadoraEdit} />

                    <Route exact path='/produto' component={ProdutoIndex} />
                    <Route path='/produto/create' component={ProdutoCreate} />
                    <Route path='/produto/edit/:id' component={ProdutoEdit} />

                    <Route exact path='/pedido' component={PedidoIndex} />
                    <Route path='/pedido/create' component={PedidoCreate} />
                    <Route path='/pedido/edit/:id' component={PedidoEdit} />

                    <Route path='/' component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
