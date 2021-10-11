import React, { Component, useState } from "react";
import styled from "styled-components";
import { Button, Grid, MenuItem, TextField } from "@mui/material";
import Client from "../../models/client";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

type State = {
    client: Client,
    errorField: string, //nomeCompleto, cpf, dataNascimento, sexo, cidade ou estado
    errorMessage: string
};

export const Titulo = styled.h1`
    padding-bottom: 50px;
`

export class ClientCreate extends Component<Props, State>{

    constructor(props: Props) {
        super(props);

        this.state = {
            client: new Client(0, '', '', '', '', '', ''),
            errorField: "",
            errorMessage: ""
        };
    }

    render() {

        const { client, errorField, errorMessage } = this.state;

        return (
            <Grid container direction="column" justifyContent="center" alignItems="center" >


                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <Titulo> Novo Cliente </Titulo>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <TextField
                        fullWidth
                        className="m-2"
                        id="nomeCompleto"
                        label="Nome Completo"
                        variant="filled"
                        value={client.nomeCompleto}
                        onChange={e => client.nomeCompleto = e.target.value}
                        helperText={"Necessário informar o campo para efetuar o cadastro."}
                        error={(errorField === "nomeCompleto")}
                    />
                    <br />
                    <TextField
                        fullWidth
                        className="m-2"
                        id="cpf"
                        label="CPF"
                        variant="filled"
                        value={client.cpf}
                        onChange={e => client.cpf = e.target.value}
                        helperText={errorMessage}
                        error={(errorField === "cpf")}
                    />
                    <br />
                    <TextField
                        fullWidth
                        className="m-2"
                        id="dataNascimento"
                        label="Data de Nascimento"
                        variant="filled"
                        value={client.dataNascimento}
                        onChange={e => client.dataNascimento = e.target.value}
                        helperText={errorMessage}
                        error={(errorField === "dataNascimento")}
                    />
                    <br />
                    <TextField
                        fullWidth
                        className="m-2"
                        id="sexo"
                        label="Sexo ('H', 'M' ou 'O')"
                        variant="filled"
                        value={client.sexo}
                        onChange={e => client.sexo = e.target.value}
                        helperText={errorMessage}
                        error={(errorField === "sexo")}
                    />
                    <br />
                    <TextField
                        fullWidth
                        className="m-2"
                        id="cidade"
                        label="Cidade"
                        variant="filled"
                        value={client.cidade}
                        onChange={e => client.cidade = e.target.value}
                        helperText={errorMessage}
                        error={(errorField === "cidade")}
                    />
                    <br />
                    <TextField
                        fullWidth
                        className="m-2"
                        id="estado"
                        label="Estado"
                        variant="filled"
                        value={client.estado}
                        onChange={e => client.estado = e.target.value}
                        helperText={errorMessage}
                        error={(errorField === "estado")}
                    />
                </Grid>
            </Grid>
        );
    }
}
