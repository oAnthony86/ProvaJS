import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

export const DivTeste = styled.div`
    background-color:red;
`;

export const Home: React.FC = () => {
    return(
        <Grid container>
            <Grid item xs={8}>
                <DivTeste>teste</DivTeste>
            </Grid>
        </Grid>
    );
}
