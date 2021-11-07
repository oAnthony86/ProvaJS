import * as React from 'react';
import { Link } from 'react-router-dom';
import Transportadora from "../../models/transportadora";
import { Button } from '../../common/components/form';

interface Props {
    transportadora: Transportadora;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

export const TransportadoraForm: React.FunctionComponent<Props> = (props) => {

    return (
        <>
            <h3 className="text-center">Gerenciamento de Transportadora</h3>
            <Link to={"/transportadora"} className="btn btn-outline-success">
                Voltar
            </Link>

            <form>

                <div className="form-group">
                    <label htmlFor="descricao">Descrição</label>
                    <input
                        type="text"
                        name="descricao"
                        className="form-control"
                        placeholder="Descrição"
                        value={props.transportadora.descricao}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            props.onChange(e.target.name, e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cnpj">CNPJ</label>
                    <input
                        type="number"
                        name="cnpj"
                        className="form-control"
                        placeholder="CNPJ"
                        value={props.transportadora.cnpj}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            props.onChange(e.target.name, e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cidade">Cidade</label>
                    <input
                        type="text"
                        name="cidade"
                        className="form-control"
                        placeholder="Cidade"
                        value={props.transportadora.cidade}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            props.onChange(e.target.name, e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="estado">Estado</label>
                    <input
                        type="text"
                        name="estado"
                        className="form-control"
                        placeholder="Estado"
                        value={props.transportadora.estado}
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
