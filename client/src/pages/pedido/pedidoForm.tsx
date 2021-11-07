import * as React from 'react';
import { Link } from 'react-router-dom';
import Pedido from "../../models/pedido";
import Cliente from "../../models/cliente";
import Transportadora from "../../models/transportadora";
import { Button } from '../../common/components/form';

interface Props {
    pedido: Pedido;
    clienteList: Array<Cliente>,
    transportadoraList: Array<Transportadora>
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

export const PedidoForm: React.FunctionComponent<Props> = (props) => {
    return (
        <>
            <h3 className="text-center">Gerenciamento de Pedidos</h3>
            <Link to={"/pedido"} className="btn btn-outline-success">
                Voltar
            </Link>

            <form>

                <div className="form-group">
                    <label htmlFor="clienteId">Cliente</label>
                    <select
                        name="clienteId"
                        className="form-control"
                        value={props.pedido.clienteId}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                            props.onChange(e.target.name, e.target.value);
                        }}
                    >
                        {
                            props.clienteList.map((c) => {
                                return (<option key={c.id} value={c.id}>{c.nomeCompleto}</option>)
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="transportadoraId">Transportadora</label>
                    <select
                        name="transportadoraId"
                        className="form-control"
                        value={props.pedido.transportadoraId}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                            props.onChange(e.target.name, e.target.value);
                        }}
                    >
                        {
                            props.transportadoraList.map((t) => {
                                return (<option key={t.id} value={t.id}>{t.descricao}</option>)
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="dataEmissao">Data de Emissão</label>
                    <input
                        type="date"
                        name="dataEmissao"
                        className="form-control"
                        value={props.pedido.dataEmissao}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            props.onChange(e.target.name, e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dataEntrega">Data de Entrega</label>
                    <input
                        type="date"
                        name="dataEntrega"
                        className="form-control"
                        value={props.pedido.dataEntrega}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            props.onChange(e.target.name, e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="valorTotal">Valor Total</label>
                    <input
                        type="number"
                        step="0.01"
                        name="valorTotal"
                        className="form-control"
                        value={props.pedido.valorTotal}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            props.onChange(e.target.name, e.target.value);
                        }}
                    />
                </div>

                <Button
                    label="Save"
                    className="btn btn-success mt-2"
                    onClick={props.onSave}
                />
            </form>
        </>
    );
};
