import React from 'react';
import * as toastr from 'toastr';
import { History } from 'history';
import BaseService from '../../service/base.service';
import Pedido from "../../models/pedido";
import Cliente from "../../models/cliente";
import Transportadora from "../../models/transportadora";
import Produto from "../../models/produto";
import PedidoItem from "../../models/pedidoItem";
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
    transportadoraList: Array<Transportadora>
}


export default class PedidoEdit extends React.Component<IProps, IState> {

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
            transportadoraList: []
        }

        BaseService.getAll<Cliente>("/Cliente").then((rp) => {
            if (rp.Status) {
                const data = rp.Data;
                (data || []).forEach((p: any) => {
                    this.state.clienteList.push(new Cliente(p.id, p.nomeCompleto, p.cpf, p.dataNascimento, p.sexo, p.cidade, p.estado));
                });
            }
        });

        BaseService.getAll<Transportadora>("/Transportadora").then((rp) => {
            if (rp.Status) {
                const data = rp.Data;
                (data || []).forEach((p: any) => {
                    this.state.transportadoraList.push(new Transportadora(p.id, p.cnpj, p.descricao, p.cidade, p.estado));
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

    private getParsedDate(strDate: string) {
        return `${strDate.substring(0, 4)}-${strDate.substring(5, 7)}-${strDate.substring(8, 10)}`;
    }

    public componentDidMount() {
        BaseService.get<Pedido>('/Pedido', this.props.match.params.id).then(
            (rp) => {
                if (rp.Status) {
                    const p = rp.Data;

                    var pedido = new Pedido(
                        p.id,
                        p.clienteId,
                        p.transportadoraId,
                        this.getParsedDate(p.dataEmissao),
                        this.getParsedDate(p.dataEntrega),
                        p.valorTotal,
                        new Cliente(
                            p.cliente.id,
                            p.cliente.nomeCompleto,
                            p.cliente.cpf,
                            p.cliente.dataNascimento,
                            p.cliente.sexo,
                            p.cliente.cidade,
                            p.cliente.estado
                        ),
                        new Transportadora(
                            p.transportadora.id,
                            p.transportadora.cnpj,
                            p.transportadora.descricao,
                            p.transportadora.cidade,
                            p.transportadora.estado
                        ),
                        []
                    );
                    (p.pedidoItem || []).forEach((pi: any) => {
                        pedido.pedidoItem.push(new PedidoItem(
                            pi.id,
                            pi.produtoId,
                            pi.quantidade,
                            pi.valorUnitario,
                            new Produto(
                                pi.produto.id,
                                pi.produto.codigoBarra,
                                pi.produto.descricao,
                                pi.produto.preco
                            )
                        ));
                    });

                    this.setState({ pedido: pedido });
                } else {
                    toastr.error(rp.Messages);
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                }
            }

        );
    }


    private onSave = () => {
        BaseService.update<Pedido>("/Pedido", this.state.pedido).then(
            (rp) => {
                if (rp.Status) {
                    toastr.success('Pedido Alterado com Sucesso.');
                    this.props.history.goBack();
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
                onChange={this.onFieldValueChange}
                onSave={this.onSave}
            />
        );
    }
}
