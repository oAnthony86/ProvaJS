import React from "react";
import { Link } from "react-router-dom";
import Transportadora from "../../models/transportadora";
import BaseService from "../../service/base.service";
import * as toastr from "toastr";

function Delete(Id?: number) {
    BaseService.delete(`/Transportadora/${Id}`, null)
        .then((rp) => {
            if (rp.Status) {
                toastr.success("Transportadora Removida com sucesso!.");
                window.location.reload();
            } else {
                toastr.error(rp.Messages);
                console.log("Messages: " + rp.Messages);
                console.log("Exception: " + rp.Exception);
            }
        });
}

interface IProps {
    Transportadora: Transportadora;
    index: Number;
}

const TableRow: React.FunctionComponent<IProps> = (props) => {
    return (
        <tr>
            <td>{props.Transportadora.cnpj}</td>
            <td>{props.Transportadora.descricao}</td>
            <td>{props.Transportadora.cidade}</td>
            <td>{props.Transportadora.estado}</td>
            <td>
                <div className="justify-content-center">
                    <Link to={"/transportadora/edit/" + props.Transportadora.id} className="btn btn-outline-primary">
                        Alterar
                    </Link>
                    <span> </span>
                    <button onClick={() => Delete(props.Transportadora.id)} className="btn btn-outline-danger">
                        Remover
                    </button>
                </div>
            </td>
        </tr>
    );
};
export default TableRow;
