import React from "react";
import { Grid, Typography, Paper, Fab } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import useStyles from "./styles";

import westernEurope from "../../images/westernEurope.jpg";
import northernEurope from "../../images/northernEurope.jpg";
import easternEurope from "../../images/easternEurope.jpg";
import southernEurope from "../../images/southernEurope.jpg";
import northernAmerica from "../../images/northernAmerica.jpg";
import centralAmerica from "../../images/centralAmerica.jpg";
import southAmerica from "../../images/southAmerica.jpg";
import caribbean from "../../images/caribbean.jpg";
import northernAfrica from "../../images/northernAfrica.jpg";
import westernCentralAfrica from "../../images/westernCentralAfrica.jpg";
import easternAfrica from "../../images/easternAfrica.jpg";
import westernAsia from "../../images/westernAsia.jpg";
import centralAsia from "../../images/centralAsia.jpg";
import southernAsia from "../../images/southernAsia.jpg";
import easternAsia from "../../images/easternAsia.jpg";
import southEasternAsia from "../../images/southEasternAsia.jpg";
import melanesia from "../../images/melanesia.jpg";
import australiaAndNewZealand from "../../images/australiaAndNewZealand.jpg";
import polynesia from "../../images/polynesia.jpg";

import { InfoField } from "./InfoField/InfoField";

const SingleCountry = ({ setCountrySearch, filteredCountries }) => {
  const classes = useStyles();

  const bgImage = (subregion) => {
    switch (subregion) {
      case "Western Europe":
        return westernEurope;
      case "Northern Europe":
        return northernEurope;
      case "Eastern Europe":
        return easternEurope;
      case "Southern Europe":
        return southernEurope;
      case "Northern America":
        return northernAmerica;
      case "Central America":
        return centralAmerica;
      case "South America":
        return southAmerica;
      case "Caribbean":
        return caribbean;
      case "Northern Africa":
        return northernAfrica;
      case "Western Africa":
        return westernCentralAfrica;
      case "Middle Africa":
        return westernCentralAfrica;
      case "Southern Africa":
        return westernCentralAfrica;
      case "Eastern Africa":
        return easternAfrica;
      case "Western Asia":
        return westernAsia;
      case "Central Asia":
        return centralAsia;
      case "Southern Asia":
        return southernAsia;
      case "Eastern Asia":
        return easternAsia;
      case "South-Eastern Asia":
        return southEasternAsia;
      case "Melanesia":
        return melanesia;
      case "Australia and New Zealand":
        return australiaAndNewZealand;
      case "Polynesia":
        return polynesia;
      case "Micronesia":
        return polynesia;
    }
  };

  const numberWithCommas = (value) => {
    if (value > 1000) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    } else {
      return value;
    }
  };

  const languages = filteredCountries[0].languages.map((item) => {
    return item.name;
  });

  const population = numberWithCommas(filteredCountries[0].population);

  const area = numberWithCommas(filteredCountries[0].area);

  const handleClick = () => {
    setCountrySearch("");
  };

  return (
    <>
      <Grid
        container
        component={Paper}
        className={classes.titleContainer}
        elevation={10}
        style={{
          backgroundImage: `url(${bgImage(filteredCountries[0].subregion)})`,
        }}
      >
        <Grid item xs={12} sm={10} className={classes.titleItem}>
          <Typography className={classes.countryNameTitle} variant="h5">
            {filteredCountries[0].name}
          </Typography>

          <img src={filteredCountries[0].flag} className={classes.image} />
        </Grid>
      </Grid>
      <Grid container className={classes.valuesContainer} xs={12}>
        <Grid item xs={12} sm={7} className={classes.valueItem}>
          <InfoField value={filteredCountries[0].subregion} icon={"location"} />
        </Grid>
        <Grid item xs={12} sm={7} className={classes.valueItem}>
          <InfoField value={filteredCountries[0].capital} icon={"capital"} />
        </Grid>
        <Grid item xs={12} sm={7} className={classes.valueItem}>
          <InfoField value={population} marking={"ppl"} icon={"population"} />
        </Grid>
        <Grid item xs={12} sm={7} className={classes.valueItem}>
          <InfoField value={area} marking={"km2"} icon={"area"} />
        </Grid>
        <Grid item xs={12} sm={7} className={classes.valueItem}>
          <InfoField
            value={filteredCountries[0].currencies[0].name}
            marking={filteredCountries[0].currencies[0].symbol}
            icon={"currencies"}
          />
        </Grid>
        <Grid item xs={12} sm={7} className={classes.valueItem}>
          <InfoField value={languages} icon={"languages"} />
        </Grid>
        <Grid item xs={12} sm={7} className={classes.valueItem}>
          <InfoField
            value={`+${filteredCountries[0].callingCodes}`}
            icon={"callingCodes"}
          />
        </Grid>
        <Grid item xs={12} sm={7} className={classes.closeButtonContainer}>
          <Fab className={classes.closeButton} onClick={handleClick}>
            <HighlightOffIcon className={classes.closeButtonIcon} />
          </Fab>
        </Grid>
      </Grid>
    </>
  );
};

export default SingleCountry;
