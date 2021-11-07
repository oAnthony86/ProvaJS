import React from "react";
import { Link } from "react-router-dom";
import Produto from "../../models/produto";
import BaseService from "../../service/base.service";
import * as toastr from "toastr";

function Delete(Id?: number) {
    BaseService.delete(`/Produto/${Id}`, null)
        .then((rp) => {
            if (rp.Status) {
                toastr.success("Produto Removido com sucesso!.");
                window.location.reload();
            } else {
                toastr.error(rp.Messages);
                console.log("Messages: " + rp.Messages);
                console.log("Exception: " + rp.Exception);
            }
        });
}

interface IProps {
    Produto: Produto;
    index: Number;
}

const TableRow: React.FunctionComponent<IProps> = (props) => {
    return (
        <tr>
            <td>{props.Produto.codigoBarra}</td>
            <td>{props.Produto.descricao}</td>
            <td>{props.Produto.preco}</td>
            <td>
                <div className="justify-content-center">
                    <Link to={"/produto/edit/" + props.Produto.id} className="btn btn-outline-primary">
                        Alterar
                    </Link>
                    <span> </span>
                    <button onClick={() => Delete(props.Produto.id)} className="btn btn-outline-danger">
                        Remover
                    </button>
                </div>
            </td>
        </tr>
    );
};
export default TableRow;
