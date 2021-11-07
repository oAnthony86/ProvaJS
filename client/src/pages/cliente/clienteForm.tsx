import * as React from 'react';
import { Link } from 'react-router-dom';
import Cliente from "../../models/cliente";
import { Button } from '../../common/components/form';

interface Props {
    cliente: Cliente;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

export const ClienteForm: React.FunctionComponent<Props> = (props) => {

    return (
        <>
            <h3 className="text-center">Gerenciamento de Cliente</h3>
            <Link to={"/cliente"} className="btn btn-outline-success">
                Voltar
            </Link>

            <form>

                <div className="form-group">
                    <label htmlFor="nomeCompleto">Nome Completo</label>
                    <input
                        type="text"
                        name="nomeCompleto"
                        className="form-control"
                        placeholder="Nome Completo"
                        value={props.cliente.nomeCompleto}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            props.onChange(e.target.name, e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cpf">CPF</label>
                    <input
                        type="number"
                        name="cpf"
                        className="form-control"
                        placeholder="CPF"
                        value={props.cliente.cpf}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            props.onChange(e.target.name, e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dataNascimento">Data de Nascimento</label>
                    <input
                        type="date"
                        name="dataNascimento"
                        className="form-control"
                        value={props.cliente.dataNascimento}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            props.onChange(e.target.name, e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="sexo">Sexo ('M', 'F' ou 'O')</label>
                    <select
                        name="sexo"
                        className="form-control"
                        value={props.cliente.sexo}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                            props.onChange(e.target.name, e.target.value);
                        }}
                    >
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                        <option value="O">Outro</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="cidade">Cidade</label>
                    <input
                        type="text"
                        name="cidade"
                        className="form-control"
                        placeholder="Cidade"
                        value={props.cliente.cidade}
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
                        value={props.cliente.estado}
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
