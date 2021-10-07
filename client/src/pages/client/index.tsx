import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

export const Content = styled.div`
    background-color:red;
    height:100%;
    width:100%;
`;

const data: GridRowsProp = [
    { id: 1, nomeCompleto: 'Teste 01', cpf: '123.456.789.01', dataNascimento: '20/02/2000', sexo: 'M', cidade: 'Laurentino', Estado: 'SC' },
    { id: 2, nomeCompleto: 'Teste 02', cpf: '123.456.789.02', dataNascimento: '20/02/2000', sexo: 'M', cidade: 'Laurentino', Estado: 'SC' },
    { id: 3, nomeCompleto: 'Teste 03', cpf: '123.456.789.03', dataNascimento: '20/02/2000', sexo: 'M', cidade: 'Laurentino', Estado: 'SC' },
    { id: 4, nomeCompleto: 'Teste 04', cpf: '123.456.789.04', dataNascimento: '20/02/2000', sexo: 'M', cidade: 'Laurentino', Estado: 'SC' },
    { id: 5, nomeCompleto: 'Teste 05', cpf: '123.456.789.05', dataNascimento: '20/02/2000', sexo: 'M', cidade: 'Laurentino', Estado: 'SC' }
];

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'nomeCompleto', headerName: 'Nome Completo', width: 300 },
    { field: 'cpf', headerName: 'CPF', width: 150 },
    { field: 'dataNascimento', headerName: 'Data de Nascimento', width: 100 },
    { field: 'sexo', headerName: 'Sexo', width: 75 },
    { field: 'cidade', headerName: 'Cidade', width: 150 },
    { field: 'estado', headerName: 'Estado', width: 150 },
];

export const ClientList: React.FC = () => {

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={10}>
                <div style={{ height: 500, width: '100%' }}>
                    <DataGrid rows={data} columns={columns} />
                </div>
            </Grid>
        </Grid>
    );
}
