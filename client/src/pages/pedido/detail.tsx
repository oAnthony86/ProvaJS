import React from 'react';
import * as toastr from 'toastr';
import { History } from 'history';
import BaseService from '../../service/base.service';
import Pedido from "../../models/pedido";
import Cliente from "../../models/cliente";
import Transportadora from "../../models/transportadora";
import Produto from "../../models/produto";
import PedidoItem from "../../models/pedidoItem";
import { PedidoShow } from './pedidoShow';


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
    pedido: Pedido
}


export default class PedidoDetail extends React.Component<IProps, IState> {

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
            }
        }
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
                        p.ClienteId,
                        p.TransportadoraId,
                        this.getParsedDate(p.DataEmissao),
                        this.getParsedDate(p.DataEntrega),
                        p.ValorTotal,
                        new Cliente(
                            p.cliente.id,
                            p.cliente.nomecompleto,
                            p.cliente.cpf,
                            this.getParsedDate(p.cliente.datanascimento),
                            p.cliente.sexo,
                            p.cliente.cidade,
                            p.cliente.estado
                        ),
                        new Transportadora(
                            p.transportadora.id,
                            p.transportadora.CNPJ,
                            p.transportadora.Descricao,
                            p.transportadora.Cidade,
                            p.transportadora.Estado
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

    render() {
        return (
            <PedidoShow
                pedido={this.state.pedido}
            />
        );
    }
}
