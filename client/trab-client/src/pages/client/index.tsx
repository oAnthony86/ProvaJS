import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

export const Content = styled.div`
    background-color:red;
    height:100%;
    width:100%;
`;

export const ClientList: React.FC = () => {

    const data: GridRowsProp = [
        { id: 1, nomeCompleto: 'Teste 01', cpf: '123.456.789.01', dataNascimento: '20/02/2000', sexo: 'M', cidade: 'Laurentino', Estado: 'SC' },
        { id: 1, nomeCompleto: 'Teste 01', cpf: '123.456.789.01', dataNascimento: '20/02/2000', sexo: 'M', cidade: 'Laurentino', Estado: 'SC' },
        { id: 1, nomeCompleto: 'Teste 01', cpf: '123.456.789.01', dataNascimento: '20/02/2000', sexo: 'M', cidade: 'Laurentino', Estado: 'SC' },
        { id: 1, nomeCompleto: 'Teste 01', cpf: '123.456.789.01', dataNascimento: '20/02/2000', sexo: 'M', cidade: 'Laurentino', Estado: 'SC' },
        { id: 1, nomeCompleto: 'Teste 01', cpf: '123.456.789.01', dataNascimento: '20/02/2000', sexo: 'M', cidade: 'Laurentino', Estado: 'SC' }
    ];

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'nomeCompleto', headerName: 'Nome Completo', width: 200 },
        { field: 'cpf', headerName: 'CPF', width: 100 },
        { field: 'dataNascimento', headerName: 'Data de Nascimento', width: 100 },
        { field: 'sexo', headerName: 'Sexo', width: 50 },
        { field: 'cidade', headerName: 'Cidade', width: 150 },
        { field: 'estado', headerName: 'Estado', width: 50 },
    ];

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={10}>
                <Content>
                    <DataGrid rows={data} columns={columns} />
                </Content>
            </Grid>
        </Grid>
    );
}
