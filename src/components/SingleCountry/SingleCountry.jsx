import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";

import useStyles from "./styles";

const SingleCountry = ({ setCountrySearch, filteredCountries }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container component={Paper} className={classes.titleContainer}>
        <Grid item xs={11} sm={10} className={classes.titleItem}>
          <Typography>{filteredCountries[0].name}</Typography>
          <Typography>{filteredCountries[0].region}</Typography>
          <img src={filteredCountries[0].flag} className={classes.image} />
        </Grid>
      </Grid>
      <Grid container className={classes.valuesContainer} component={Paper}>
        <Grid item xs={10} sm={6} className={classes.valueItem}>
          <Typography>
            <b>Capital:</b> {filteredCountries[0].capital}
          </Typography>
          <Typography>
            <b>Capital:</b> {filteredCountries[0].capital}
          </Typography>
          <Typography>
            <b>Capital:</b> {filteredCountries[0].capital}
          </Typography>
          <Typography>
            <b>Capital:</b> {filteredCountries[0].capital}
          </Typography>
          <Typography>
            <b>Capital:</b> {filteredCountries[0].capital}
          </Typography>
        </Grid>
        <Grid item xs={10} sm={6} className={classes.valueItem}>
          Toka
        </Grid>
      </Grid>
    </>
  );
};

export default SingleCountry;
