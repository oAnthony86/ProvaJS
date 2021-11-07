import * as React from "react";
import { Link } from "react-router-dom";
import TableRow from "./TableRow";
import Pedido from "../../models/pedido";
import BaseService from "../../service/base.service";

interface IProps { }

interface IState {
    listPedidos: Array<Pedido>;
    isReady: Boolean;
    hasError: Boolean;
}

class PedidoIndex extends React.Component<IProps, IState> {

    public state: IState = {
        listPedidos: new Array<Pedido>(),
        isReady: false,
        hasError: false,
    };

    constructor(props: IProps) {
        super(props);
        this.state = {
            isReady: false,
            listPedidos: Array<Pedido>(),
            hasError: false,
        };
    }

    public componentDidMount() {
        BaseService.getAll<Pedido>("/Pedido").then((rp) => {
            if (rp.Status) {
                const data = rp.Data;
                const listPedidos = new Array<Pedido>();

                (data || []).forEach((p: any) => {
                    listPedidos.push(new Pedido(p.id, p.codigoBarra, p.descricao, p.preco));
                });

                this.setState({ listPedidos: listPedidos });
                this.setState({ isReady: true });
            } else {
                this.setState({ isReady: true });
                this.setState({ hasError: true });
                console.log("Messages: " + rp.Messages);
                console.log("Exception: " + rp.Exception);
            }
        });
    }

    public tabRow = () => {
        if (!this.state.isReady) {
            return (
                <tr>
                    <td colSpan={8} className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Carregando informações...</span>
                        </div>
                    </td>
                </tr>
            );
        }
        if (this.state.hasError) {
            return (
                <tr>
                    <td colSpan={8} className="text-center">
                        <div className="alert alert-danger" role="alert">
                            Falha ao Carregar lista de Pedidos
                        </div>
                    </td>
                </tr>
            );
        }

        return this.state.listPedidos.map(function (object, i) {
            return <TableRow key={i} index={i + 1} Pedido={object} />;
        });
    };

    public render(): React.ReactNode {
        return (
            <div className="">
                <h3 className="text-center">Lista de Pedidos</h3>
                <Link to={"/pedido/create"} className="btn btn-outline-success">
                    Novo Pedido
                </Link>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Código de Barras</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th className="text-center" colSpan={2}>
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>{this.tabRow()}</tbody>
                </table>
            </div>
        );
    }
}
export default PedidoIndex;
