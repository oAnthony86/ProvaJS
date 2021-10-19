import * as React from "react";
import TableRow from "./TableRow";
import Cliente from "../../models/cliente";
import BaseService from "../../service/base.service";

interface IProps { }

interface IState {
    listClientes: Array<Cliente>;
    isReady: Boolean;
    hasError: Boolean;
}

class ClienteIndex extends React.Component<IProps, IState> {
    
    public state: IState = {
        listClientes: new Array<Cliente>(),
        isReady: false,
        hasError: false,
    };
    
    constructor(props: IProps) {
        super(props);
        this.state = {
            isReady: false,
            listClientes: Array<Cliente>(),
            hasError: false,
        };
    }

    public componentDidMount() {
        BaseService.getAll<Cliente>("/Cliente").then((rp) => {
            if (rp.Status) {
                const data = rp.Data;
                const listClientes = new Array<Cliente>();

                (data || []).forEach((p: any) => {
                    listClientes.push(new Cliente(p.id, p.nomeCompleto, p.cpf, p.dataNascimento, p.sexo, p.cidade, p.estado));
                });

                this.setState({ listClientes: listClientes });
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
                    <td colSpan={6} className="text-center">
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
                    <td colSpan={6} className="text-center">
                        <div className="alert alert-danger" role="alert">
                            Falha ao Carregar lista de Clientes
                        </div>
                    </td>
                </tr>
            );
        }

        return this.state.listClientes.map(function (object, i) {
            return <TableRow key={i} index={i + 1} cliente={object} />;
        });
    };

    public render(): React.ReactNode {
        return (
            <div>
                <h3 className="text-center">Lista de Clientes</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Índice</th>
                            <th>Nome Completo</th>
                            <th>CPF</th>
                            <th>Data de Nascimento</th>
                            <th>Sexo</th>
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
export default ClienteIndex;
