import React, { useEffect, useContext } from "react";
import axios from "axios";
import { Grid, Container } from "@material-ui/core";

import CountriesContext from "../../context/context";

import SearchBar from "../SearchBar/SearchBar";
import CountriesList from "../CountriesList/CountriesList";
import SingleCountry from "../SingleCountry/SingleCountry";

import useStyles from "./styles";

const Countries = () => {
  const classes = useStyles();

  const {
    state,
    setCountries,
    countrySearch,
    setCountrySearch,
    filteredCountries,
    setFilteredCountries,
  } = useContext(CountriesContext);

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    setFilteredCountries(newCountries());
  }, [countrySearch, state]);

  const newCountries = () =>
    state.filter((value) => {
      if (countrySearch === "") {
        return value;
      } else if (
        value.name.toLowerCase().includes(countrySearch.toLowerCase())
      ) {
        return value;
      }
    });

  const fetchCountries = async () => {
    const { data } = await axios.get(
      "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;flag;region;subregion;population;area;timezones;currencies;languages;callingCodes"
    );
    setCountries(data);
  };

  return (
    <Container>
      <Grid container className={classes.mainContainer}>
        <SearchBar
          setCountrySearch={setCountrySearch}
          countrySearch={countrySearch}
          filteredCountries={filteredCountries}
        />
        {filteredCountries.length === 1 && countrySearch !== "" ? (
          <SingleCountry
            setCountrySearch={setCountrySearch}
            filteredCountries={filteredCountries}
          />
        ) : (
          <CountriesList
            state={state}
            filteredCountries={filteredCountries}
            setFilteredCountries={setFilteredCountries}
          />
        )}
      </Grid>
    </Container>
  );
};

export default Countries;
