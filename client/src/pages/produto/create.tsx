import React from 'react';
import * as toastr from 'toastr';
import Produto from "../../models/produto";
import BaseService from "../../service/base.service";
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


export default class ProdutoCreate extends React.Component<IProps, IState> {
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
    private onSave = () => {
        BaseService.create<Produto>("/Produto", this.state.produto).then(
            (rp) => {
                if (rp.Status) {
                    toastr.success('Nova Produto Inserido com Sucesso.');


                    this.setState({
                        produto: {
                            id: 0,
                            codigoBarra: '',
                            descricao: '',
                            preco: 0
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
            <ProdutoForm
                produto={this.state.produto}
                onChange={this.onFieldValueChange}
                onSave={this.onSave}
            />
        );
    }

}
