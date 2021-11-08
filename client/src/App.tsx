import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';
import Menu from './components/superiorMenu.component';
import Home from './components/home.component';
import Login from './components/login.component';
import Logoff from './components/logoff.component';

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
import PedidoDetail from './pages/pedido/detail';

const PrivateRoute = ({component, isAuthenticated, ...rest}: any) => {
    const routeComponent = (props: any) => (
        (localStorage.getItem("user"))
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/login'}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};

const App: React.FC = () => {
    return (
        <Router>
            <div className="container">
                <Menu />
                <br />

                <Switch>
                    <PrivateRoute exact path='/cliente' component={ClienteIndex} />
                    <PrivateRoute path='/cliente/create' component={ClienteCreate} />
                    <PrivateRoute path='/cliente/edit/:id' component={ClienteEdit} />

                    <PrivateRoute exact path='/transportadora' component={TransportadoraIndex} />
                    <PrivateRoute path='/transportadora/create' component={TransportadoraCreate} />
                    <PrivateRoute path='/transportadora/edit/:id' component={TransportadoraEdit} />

                    <PrivateRoute exact path='/produto' component={ProdutoIndex} />
                    <PrivateRoute path='/produto/create' component={ProdutoCreate} />
                    <PrivateRoute path='/produto/edit/:id' component={ProdutoEdit} />

                    <PrivateRoute exact path='/pedido' component={PedidoIndex} />
                    <PrivateRoute path='/pedido/create' component={PedidoCreate} />
                    <PrivateRoute path='/pedido/edit/:id' component={PedidoEdit} />
                    <PrivateRoute path='/pedido/detail/:id' component={PedidoDetail} />

                    <Route exact path='/login' component={Login} />
                    <PrivateRoute exact path='/logoff' component={Logoff} />
                    <PrivateRoute path='/' component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
