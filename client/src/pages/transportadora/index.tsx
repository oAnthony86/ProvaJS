import * as React from "react";
import { Link } from "react-router-dom";
import TableRow from "./TableRow";
import Transportadora from "../../models/transportadora";
import BaseService from "../../service/base.service";

interface IProps { }

interface IState {
    listTransportadoras: Array<Transportadora>;
    isReady: Boolean;
    hasError: Boolean;
}

class TransportadoraIndex extends React.Component<IProps, IState> {

    public state: IState = {
        listTransportadoras: new Array<Transportadora>(),
        isReady: false,
        hasError: false,
    };

    constructor(props: IProps) {
        super(props);
        this.state = {
            isReady: false,
            listTransportadoras: Array<Transportadora>(),
            hasError: false,
        };
    }

    public componentDidMount() {
        BaseService.getAll<Transportadora>("/Transportadora").then((rp) => {
            if (rp.Status) {
                const data = rp.Data;
                const listTransportadoras = new Array<Transportadora>();

                (data || []).forEach((p: any) => {
                    listTransportadoras.push(new Transportadora(p.id, p.CNPJ, p.Descricao, p.Cidade, p.Estado));
                });

                this.setState({ listTransportadoras: listTransportadoras });
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
                            Falha ao Carregar lista de Transportadoras
                        </div>
                    </td>
                </tr>
            );
        }

        return this.state.listTransportadoras.map(function (object, i) {
            return <TableRow key={i} index={i + 1} Transportadora={object} />;
        });
    };

    public render(): React.ReactNode {
        return (
            <div className="">
                <h3 className="text-center">Lista de Transportadoras</h3>
                <Link to={"/transportadora/create"} className="btn btn-outline-success">
                    Novo Transportadora
                </Link>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>CNPJ</th>
                            <th>Cidade</th>
                            <th>Estado</th>
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
export default TransportadoraIndex;
