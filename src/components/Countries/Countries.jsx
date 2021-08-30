import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Grid, Container } from "@material-ui/core";

import CountriesContext from "../../context/context";

import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import CountriesList from "../CountriesList/CountriesList";

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

  const [correctSearch, setCorrectSearch] = useState(false);

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
      "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;flag;region"
    );
    setCountries(data);
  };

  console.log(state);
  console.log(countrySearch);
  console.log(filteredCountries);
  return (
    <Container>
      <Grid container>
        <SearchBar
          setCountrySearch={setCountrySearch}
          countrySearch={countrySearch}
          filteredCountries={filteredCountries}
        />
        <CountriesList state={state} filteredCountries={filteredCountries} />
      </Grid>
    </Container>
  );
};

export default Countries;
