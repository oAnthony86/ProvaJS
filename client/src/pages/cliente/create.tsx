import React from 'react';
import * as toastr from 'toastr';
import Cliente from "../../models/cliente";
import BaseService from "../../service/base.service";
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


export default class ClienteCreate extends React.Component<IProps, IState> {
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
    private onSave = () => {
        BaseService.create<Cliente>("/Cliente", this.state.cliente).then(
            (rp) => {
                if (rp.Status) {
                    toastr.success('Novo Cliente Inserido com Sucesso.');


                    this.setState({
                        cliente: {
                            id: 0,
                            nomeCompleto: '',
                            cpf: '',
                            dataNascimento: '',
                            sexo: '',
                            cidade: '',
                            estado: ''
                        }
                    });

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
