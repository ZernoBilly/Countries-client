import React, { useContext } from "react";
import { Container, Grid } from "@material-ui/core";

import useStyles from "./styles";

import Selection from "../Selection/Selection";

import CountriesContext from "../../context/context";

const Statistics = () => {
  const classes = useStyles();

  const { state } = useContext(CountriesContext);

  return (
    <Container>
      <Grid container className={classes.mainContainer}>
        <Selection state={state} />
      </Grid>
    </Container>
  );
};

export default Statistics;
