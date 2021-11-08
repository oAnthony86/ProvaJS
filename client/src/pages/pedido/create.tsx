import React from 'react';
import * as toastr from 'toastr';
import BaseService from "../../service/base.service";
import Pedido from "../../models/pedido";
import Cliente from "../../models/cliente";
import Transportadora from "../../models/transportadora";
import Produto from "../../models/produto";
import { PedidoForm } from './pedidoForm';

interface IProps {
    history: History;
    //Map properties match
    match: {
        isExact: boolean
        params: {
            id: string
        },
        path: string,
        url: string,
    }
}
interface IState {
    pedido: Pedido,
    clienteList: Array<Cliente>,
    transportadoraList: Array<Transportadora>,
    produtoList: Array<Produto>
}


export default class ProdutoCreate extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            pedido: {
                id: 0,
                clienteId: 0,
                transportadoraId: 0,
                dataEmissao: '',
                dataEntrega: '',
                valorTotal: 0,
                cliente: undefined,
                transportadora: undefined,
                pedidoItem: []
            },
            clienteList: [],
            transportadoraList: [],
            produtoList: []
        }

        BaseService.getAll<Cliente>("/Cliente").then((rp) => {
            if (rp.Status) {
                const data = rp.Data;
                var clienteLista: Array<Cliente> = [];
                (data || []).forEach((p: any) => {
                    clienteLista.push(new Cliente(p.id, p.nomecompleto, p.cpf, p.datanascimento, p.sexo, p.cidade, p.estado));
                });
                this.setState({
                    ...this.state,
                    clienteList: clienteLista
                });
            }
        });

        BaseService.getAll<Transportadora>("/Transportadora").then((rp) => {
            if (rp.Status) {
                const data = rp.Data;
                var transportadoraLista: Array<Transportadora> = [];
                (data || []).forEach((p: any) => {
                    transportadoraLista.push(new Transportadora(p.id, p.CNPJ, p.Descricao, p.Cidade, p.Estado));
                });
                this.setState({
                    ...this.state,
                    transportadoraList: transportadoraLista
                });
            }
        });

        BaseService.getAll<Produto>("/Produto").then((rp) => {
            if (rp.Status) {
                const data = rp.Data;
                var produtoLista: Array<Produto> = [];
                (data || []).forEach((p: any) => {
                    produtoLista.push(new Produto(p.id, p.CodigoBarra, p.Descricao, p.Preco));
                });
                this.setState({
                    ...this.state,
                    produtoList: produtoLista
                });
            }
        });
        this.onFieldValueChange = this.onFieldValueChange.bind(this);
    }

    private onFieldValueChange(fieldName: string, value: string) {
        const nextState = {
            ...this.state,
            pedido: {
                ...this.state.pedido,
                [fieldName]: value,
            }
        };

        this.setState(nextState);
    }

    private onSave = () => {
        BaseService.create<Pedido>("/Pedido", this.state.pedido).then(
            (rp) => {
                if (rp.Status) {
                    toastr.success('Novo Pedido Inserido com Sucesso.');

                    this.setState({
                        pedido: {
                            id: 0,
                            clienteId: 0,
                            transportadoraId: 0,
                            dataEmissao: '',
                            dataEntrega: '',
                            valorTotal: 0,
                            cliente: undefined,
                            transportadora: undefined,
                            pedidoItem: []
                        }
                    });

                } else {
                    toastr.error(rp.Messages);
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                }
            }
        );

    }

    render() {
        return (
            <PedidoForm
                pedido={this.state.pedido}
                clienteList={this.state.clienteList}
                transportadoraList={this.state.transportadoraList}
                produtoList={this.state.produtoList}
                onChange={this.onFieldValueChange}
                onSave={this.onSave}
            />
        );
    }

}
