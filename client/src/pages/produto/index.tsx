import * as React from "react";
import { Link } from "react-router-dom";
import TableRow from "./TableRow";
import Produto from "../../models/produto";
import BaseService from "../../service/base.service";

interface IProps { }

interface IState {
    listProdutos: Array<Produto>;
    isReady: Boolean;
    hasError: Boolean;
}

class ProdutoIndex extends React.Component<IProps, IState> {

    public state: IState = {
        listProdutos: new Array<Produto>(),
        isReady: false,
        hasError: false,
    };

    constructor(props: IProps) {
        super(props);
        this.state = {
            isReady: false,
            listProdutos: Array<Produto>(),
            hasError: false,
        };
    }

    public componentDidMount() {
        BaseService.getAll<Produto>("/Produto").then((rp) => {
            if (rp.Status) {
                const data = rp.Data;
                const listProdutos = new Array<Produto>();

                (data || []).forEach((p: any) => {
                    listProdutos.push(new Produto(p.id, p.CodigoBarra, p.Descricao, p.Preco));
                });

                this.setState({ listProdutos: listProdutos });
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
                            Falha ao Carregar lista de Produtos
                        </div>
                    </td>
                </tr>
            );
        }

        return this.state.listProdutos.map(function (object, i) {
            return <TableRow key={i} index={i + 1} Produto={object} />;
        });
    };

    public render(): React.ReactNode {
        return (
            <div className="">
                <h3 className="text-center">Lista de Produtos</h3>
                <Link to={"/produto/create"} className="btn btn-outline-success">
                    Novo Produto
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
export default ProdutoIndex;
