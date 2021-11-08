import * as React from 'react';
import { Link } from "react-router-dom";

export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/cliente'} className="nav-link">Clientes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/transportadora'} className="nav-link">Transportadoras</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/produto'} className="nav-link">Produtos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/pedido'} className="nav-link">Pedidos</Link>
                    </li>
                </ul>
            </div>
            <div className="d-flex justify-content-end">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        {
                            (localStorage.getItem("user"))
                                ? <Link to={'./logoff'} className="nav-link float-right">Sair</Link>
                                : <Link to={'./login'} className="nav-link float-right">Entrar</Link>
                        }

                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default Menu;
