import React from "react";
import { Link } from "react-router-dom";
import BaseService from "../../service/base.service";
import Pedido from "../../models/pedido";
import * as toastr from "toastr";

function Delete(Id?: number) {
    BaseService.delete(`/Pedido/${Id}`, null)
        .then((rp) => {
            if (rp.Status) {
                toastr.success("Pedido Removido com sucesso!.");
                window.location.reload();
            } else {
                toastr.error(rp.Messages);
                console.log("Messages: " + rp.Messages);
                console.log("Exception: " + rp.Exception);
            }
        });
}

function dateFormatter(strDate: string){
    return `${strDate.substring(8, 10)}/${strDate.substring(5, 7)}/${strDate.substring(0, 4)}`
}

interface IProps {
    pedido: Pedido;
    index: Number;
}

const TableRow: React.FunctionComponent<IProps> = (props) => {
    return (
        <tr>
            <td>{props.pedido.id}</td>
            <td>{(props.pedido.cliente) ? props.pedido.cliente.nomeCompleto : ""}</td>
            <td>{(props.pedido.transportadora) ? props.pedido.transportadora.descricao : ""}</td>
            <td>{dateFormatter(props.pedido.dataEmissao)}</td>
            <td>{dateFormatter(props.pedido.dataEntrega)}</td>
            <td>{`R$ ${props.pedido.valorTotal}`}</td>
            <td>
                <div className="justify-content-center">
                    <Link to={"/pedido/detail/" + props.pedido.id} className="btn btn-outline-success">
                        Detalhamento
                    </Link>
                    <span> </span>
                    <Link to={"/pedido/edit/" + props.pedido.id} className="btn btn-outline-primary">
                        Alterar
                    </Link>
                    <span> </span>
                    <button onClick={() => Delete(props.pedido.id)} className="btn btn-outline-danger">
                        Remover
                    </button>
                </div>
            </td>
        </tr>
    );
};
export default TableRow;
