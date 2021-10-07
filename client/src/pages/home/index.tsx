import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

export const NavigationMenu = styled.nav`
    background-color:red;
`;

export const Home: React.FC = () => {
    return(
        <Grid container>
            <Grid item xs={8}>
                <NavigationMenu>
                    <Link to="/cliente">Clientes</Link>
                </NavigationMenu>
            </Grid>
        </Grid>
    );
}
