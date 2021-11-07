import React from 'react';
import * as toastr from 'toastr';
import Cliente from '../../models/cliente';
import BaseService from '../../service/base.service';
import { History } from 'history';
import { ClienteForm } from './clienteForm';


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
    cliente: Cliente
}


export default class ClienteEdit extends React.Component<IProps, IState> {

    constructor(props: IProps) {

        super(props);

        this.state = {
            cliente: {
                id: 0,
                nomeCompleto: '',
                cpf: '',
                dataNascimento: '',
                sexo: '',
                cidade: '',
                estado: ''
            }
        }
        this.onFieldValueChange = this.onFieldValueChange.bind(this);

    }

    private onFieldValueChange(fieldName: string, value: string) {
        const nextState = {
            ...this.state,
            cliente: {
                ...this.state.cliente,
                [fieldName]: value,
            }
        };

        this.setState(nextState);
    }

    private getParsedDate(strDate: string) {
        console.log(`${strDate.substring(0, 4)}/${strDate.substring(5, 7)}/${strDate.substring(8, 10)}`);

        return `${strDate.substring(0, 4)}-${strDate.substring(5, 7)}-${strDate.substring(8, 10)}`;
    }

    public componentDidMount() {
        BaseService.get<Cliente>('/Cliente', this.props.match.params.id).then(
            (rp) => {
                if (rp.Status) {
                    const p = rp.Data;
                    console.log(p.sexo)
                    this.setState({ cliente: new Cliente(p.id, p.nomeCompleto, p.cpf, this.getParsedDate(p.dataNascimento), p.sexo, p.cidade, p.estado) });
                } else {
                    toastr.error(rp.Messages);
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                }
            }

        );
    }


    private onSave = () => {

        console.log(this.state.cliente);
        BaseService.update<Cliente>("/Cliente", this.state.cliente).then(
            (rp) => {
                if (rp.Status) {
                    toastr.success('Cliente Alterado com Sucesso.');
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
            <ClienteForm
                cliente={this.state.cliente}
                onChange={this.onFieldValueChange}
                onSave={this.onSave}
            />
        );
    }
}
