import * as React from 'react';
import { Link } from 'react-router-dom';
import Pedido from "../../models/pedido";

interface Props {
    pedido: Pedido;
}

export const PedidoShow: React.FunctionComponent<Props> = (props) => {
    return (
        <>
            <h3 className="text-center">Detalhamento de Pedido</h3>
            <Link to={"/pedido"} className="btn btn-outline-success">
                Voltar
            </Link>
            <hr/>

            <form>

                <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input
                        type="number"
                        name="id"
                        className="form-control"
                        disabled
                        value={props.pedido.id}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cliente">Cliente</label>
                    <input
                        type="text"
                        name="cliente"
                        className="form-control"
                        disabled
                        value={props.pedido.cliente?.nomeCompleto}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="transportadora">Transportadora</label>
                    <input
                        type="text"
                        name="transportadora"
                        className="form-control"
                        disabled
                        value={props.pedido.transportadora?.descricao}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dataEmissao">Data de Emissão</label>
                    <input
                        type="date"
                        name="dataEmissao"
                        className="form-control"
                        disabled
                        value={props.pedido.dataEmissao}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dataEntrega">Data de Entrega</label>
                    <input
                        type="date"
                        name="dataEntrega"
                        className="form-control"
                        disabled
                        value={props.pedido.dataEntrega}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="valorTotal">Valor Total</label>
                    <input
                        type="number"
                        step="0.01"
                        name="valorTotal"
                        disabled
                        className="form-control"
                        value={props.pedido.valorTotal}
                    />
                </div>

                <div className="bg-light m-3">
                    <h3>Produtos:</h3>
                    <hr />

                    {
                        props.pedido.pedidoItem.map((obj, i) => {
                            return (
                                <div key={i} className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="produto">Produto</label>
                                            <input
                                                type="text"
                                                name="produto"
                                                className="form-control"
                                                disabled
                                                value={obj.produto.descricao}
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="quantidade">Quantidade</label>
                                            <input
                                                type="text"
                                                name="quantidade"
                                                className="form-control"
                                                disabled
                                                value={obj.quantidade}
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="valorUnitario">Valor Unitário</label>
                                            <input
                                                type="text"
                                                name="valorUnitario"
                                                className="form-control"
                                                disabled
                                                value={obj.valorUnitario}
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
            </form>
        </>
    );
};
