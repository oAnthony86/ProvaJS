import React from 'react';
import * as toastr from 'toastr';
import Produto from '../../models/produto';
import BaseService from '../../service/base.service';
import { History } from 'history';
import { ProdutoForm } from './produtoForm';


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
    produto: Produto
}


export default class ProdutoEdit extends React.Component<IProps, IState> {

    constructor(props: IProps) {

        super(props);

        this.state = {
            produto: {
                id: 0,
                codigoBarra: '',
                descricao: '',
                preco: 0
            }
        }
        this.onFieldValueChange = this.onFieldValueChange.bind(this);

    }




    private onFieldValueChange(fieldName: string, value: string) {
        const nextState = {
            ...this.state,
            produto: {
                ...this.state.produto,
                [fieldName]: value,
            }
        };

        this.setState(nextState);
    }

    public componentDidMount() {
        BaseService.get<Produto>('/Produto', this.props.match.params.id).then(
            (rp) => {
                if (rp.Status) {
                    const p = rp.Data;
                    console.log(p.sexo)
                    this.setState({ produto: new Produto(p.id, p.codigoBarra, p.descricao, p.preco) });
                } else {
                    toastr.error(rp.Messages);
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                }
            }

        );
    }


    private onSave = () => {

        console.log(this.state.produto);
        BaseService.update<Produto>("/Produto", this.state.produto).then(
            (rp) => {
                if (rp.Status) {
                    toastr.success('Produto Alterada com Sucesso.');
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
            <ProdutoForm
                produto={this.state.produto}
                onChange={this.onFieldValueChange}
                onSave={this.onSave}
            />
        );
    }
}
