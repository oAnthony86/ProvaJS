import React from "react";
import { Link } from "react-router-dom";
import Cliente from "../../models/cliente";
import BaseService from "../../service/base.service";
import * as toastr from "toastr";

function Delete(Id?: number) {
    BaseService.delete(`/cliente/${Id}`, null)
        .then((rp) => {
            if (rp.Status) {
                toastr.success("Cliente Removido com sucesso!.");
                window.location.reload();
            } else {
                toastr.error(rp.Messages);
                console.log("Messages: " + rp.Messages);
                console.log("Exception: " + rp.Exception);
            }
        });
}

interface IProps {
    cliente: Cliente;
    index: Number;
}

const TableRow: React.FunctionComponent<IProps> = (props) => {
    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.cliente.NomeCompleto}</td>
            <td>{props.cliente.Cpf}</td>
            <td>{props.cliente.DataNascimento}</td>
            <td>{props.cliente.Sexo}</td>
            <td>{props.cliente.Cidade}</td>
            <td>{props.cliente.Estado}</td>
            <td>
                <Link to={"/cliente/edit/" + props.cliente.Id} className="btn btn-primary">
                    Editar
                </Link>
            </td>
            <td>
                <button onClick={() => Delete(props.cliente.Id)} className="btn btn-danger">
                    Remover
                </button>
            </td>
        </tr>
    );
};
export default TableRow;
