import * as React from 'react';
import PedidoItem from "../../models/pedidoItem";
import Produto from "../../models/produto";
import { Button } from '../../common/components/form';

interface Props {
    index: number;
    pedidoItem: PedidoItem;
    produtoList: Array<Produto>;
    onChangeProduto: (produtoId: number) => void;
    onChangeQuantidade: (quantidade: number) => void;
    onChangeValor: (valor: number) => void;
    onRemove: () => void;
}

export const ProdutoFormAdd: React.FunctionComponent<Props> = (props) => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="produtoId">Produto</label>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="quantidade">Quantidade</label>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="valorUnitario">Valor Unitário</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <select
                            name="produtoId"
                            className="form-control"
                            value={props.pedidoItem.produtoId}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                props.onChangeProduto(parseInt(e.target.value));
                            }}
                        >
                            {
                                props.produtoList.map((p) => {
                                    return (<option key={p.id} value={p.id}>{p.descricao} ({p.codigoBarra})</option>)
                                })
                            }
                        </select>
                    </div>
                    <div className="col-md-3">
                        <input
                            type="number"
                            name="quantidade"
                            className="form-control"
                            value={props.pedidoItem.quantidade}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                props.onChangeQuantidade(parseInt(e.target.value));
                            }}
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="number"
                            step="0.01"
                            name="valorUnitario"
                            className="form-control"
                            value={props.pedidoItem.valorUnitario}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                props.onChangeValor(parseFloat(e.target.value));
                            }}
                        />
                    </div>
                    <div className="col-md-2">
                        <Button
                            label="Remover"
                            className="btn btn-danger mt-2"
                            onClick={props.onRemove}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
