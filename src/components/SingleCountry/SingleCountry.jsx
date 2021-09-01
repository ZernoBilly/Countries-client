import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";

import useStyles from "./styles";

import { InfoField } from "./InfoField/InfoField";

const SingleCountry = ({ setCountrySearch, filteredCountries }) => {
  const classes = useStyles();

  console.log(filteredCountries[0].currencies[0].name);

  return (
    <>
      <Grid
        container
        component={Paper}
        className={classes.titleContainer}
        elevation={10}
      >
        <Grid item xs={11} sm={10} className={classes.titleItem}>
          <Typography>{filteredCountries[0].name}</Typography>
          <Typography>{filteredCountries[0].region}</Typography>
          <img src={filteredCountries[0].flag} className={classes.image} />
        </Grid>
      </Grid>
      <Grid container className={classes.valuesContainer}>
        <Grid item xs={10} sm={7} className={classes.valueItem}>
          <InfoField value={filteredCountries[0].capital} icon={"capital"} />
        </Grid>
        <Grid item xs={10} sm={7} className={classes.valueItem}>
          <InfoField
            value={filteredCountries[0].population}
            marking={"ppl"}
            icon={"population"}
          />
        </Grid>
        <Grid item xs={10} sm={7} className={classes.valueItem}>
          <InfoField
            value={filteredCountries[0].area}
            marking={"sqm"}
            icon={"area"}
          />
        </Grid>
        <Grid item xs={10} sm={7} className={classes.valueItem}>
          <InfoField
            value={filteredCountries[0].currencies[0].name}
            marking={filteredCountries[0].currencies[0].symbol}
            icon={"currencies"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SingleCountry;
