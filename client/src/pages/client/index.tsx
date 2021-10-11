import React, { Component } from "react";
import { Grid } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Client from "../../models/client";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

type State = {
    clientes: Array<Client>
};

export class ClientList extends Component<Props, State>{

    constructor(props: Props) {
        super(props);

        this.state = {
            clientes: [],
        };
    }


    componentDidMount(): void {
        this.buscaListaClientes();
    }

    buscaListaClientes(): void {
        this.setState({
            clientes: [
                new Client(1, 'Cliente 01', '123.456.789-01', '10/10/2000', 'H', 'Rio do Sul', 'SC'),
                new Client(2, 'Cliente 02', '123.456.789-02', '10/02/2000', 'M', 'Lages', 'SC'),
                new Client(3, 'Cliente 03', '123.456.789-03', '02/07/2004', 'H', 'Laurentino', 'SC'),
                new Client(4, 'Cliente 04', '123.456.789-04', '24/12/2002', 'H', 'Rio do Oeste', 'SC'),
                new Client(5, 'Cliente 05', '123.456.789-05', '18/11/2001', 'M', 'Ituporanga', 'SC')
            ]
        });
    }

    render() {

        const { clientes } = this.state;

        const columns: GridColDef[] = [
            { field: 'id', headerName: 'ID', width: 100 },
            { field: 'nomeCompleto', headerName: 'Nome Completo', width: 300 },
            { field: 'cpf', headerName: 'CPF', width: 150 },
            { field: 'dataNascimento', headerName: 'Data de Nascimento', width: 100 },
            { field: 'sexo', headerName: 'Sexo', width: 75 },
            { field: 'cidade', headerName: 'Cidade', width: 150 },
            { field: 'estado', headerName: 'Estado', width: 150 },
        ];

        return (
            <Grid container justifyContent="center" alignItems="center" >
                <Grid item xs={12} md={10}>
                    <div style={{ height: 500, width: '100%' }}>
                        <DataGrid rows={clientes} columns={columns} />
                    </div>
                </Grid>
            </Grid>
        );
    }
}
