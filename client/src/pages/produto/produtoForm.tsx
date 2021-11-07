import * as React from 'react';
import { Link } from 'react-router-dom';
import Produto from "../../models/produto";
import { Button } from '../../common/components/form';

interface Props {
    produto: Produto;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

export const ProdutoForm: React.FunctionComponent<Props> = (props) => {

    return (
        <>
            <h3 className="text-center">Gerenciamento de Produto</h3>
            <Link to={"/produto"} className="btn btn-outline-success">
                Voltar
            </Link>

            <form>

                <div className="form-group">
                    <label htmlFor="codigoBarra">Código de Barras</label>
                    <input
                        type="number"
                        name="codigoBarra"
                        className="form-control"
                        placeholder="Código de Barras"
                        value={props.produto.codigoBarra}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            props.onChange(e.target.name, e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="descricao">Descrição</label>
                    <input
                        type="text"
                        name="descricao"
                        className="form-control"
                        placeholder="Descrição"
                        value={props.produto.descricao}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            props.onChange(e.target.name, e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="preco">Preço</label>
                    <input
                        type="number"
                        step="0.01"
                        name="preco"
                        className="form-control"
                        value={props.produto.preco}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            props.onChange(e.target.name, e.target.value);
                        }}
                    />
                </div>

                <Button
                    label="Save"
                    className="btn btn-success mt-2"
                    onClick={props.onSave}
                />
            </form>
        </>
    );
};
