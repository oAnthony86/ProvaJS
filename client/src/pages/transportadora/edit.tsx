import React from 'react';
import * as toastr from 'toastr';
import Transportadora from '../../models/transportadora';
import BaseService from '../../service/base.service';
import { History } from 'history';
import { TransportadoraForm } from './transportadoraForm';


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
    transportadora: Transportadora
}


export default class TransportadoraEdit extends React.Component<IProps, IState> {

    constructor(props: IProps) {

        super(props);

        this.state = {
            transportadora: {
                id: 0,
                cnpj: '',
                descricao: '',
                cidade: '',
                estado: ''
            }
        }
        this.onFieldValueChange = this.onFieldValueChange.bind(this);

    }

    private onFieldValueChange(fieldName: string, value: string) {
        const nextState = {
            ...this.state,
            transportadora: {
                ...this.state.transportadora,
                [fieldName]: value,
            }
        };

        this.setState(nextState);
    }

    public componentDidMount() {
        BaseService.get<Transportadora>('/Transportadora', this.props.match.params.id).then(
            (rp) => {
                if (rp.Status) {
                    const p = rp.Data;
                    console.log(p.sexo)
                    this.setState({ transportadora: new Transportadora(p.id, p.CNPJ, p.Descricao, p.Cidade, p.Estado) });
                } else {
                    toastr.error(rp.Messages);
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                }
            }

        );
    }


    private onSave = () => {

        console.log(this.state.transportadora);
        BaseService.update<Transportadora>("/Transportadora", this.state.transportadora).then(
            (rp) => {
                if (rp.Status) {
                    toastr.success('Transportadora Alterada com Sucesso.');
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
            <TransportadoraForm
                transportadora={this.state.transportadora}
                onChange={this.onFieldValueChange}
                onSave={this.onSave}
            />
        );
    }
}
