import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Grid, Container } from "@material-ui/core";

import CountriesContext from "../../context/context";

import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";

import useStyles from "./styles";

const Countries = () => {
  const classes = useStyles();

  const { state, setCountries } = useContext(CountriesContext);

  console.log(state);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const { data } = await axios.get(
      "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies"
    );
    setCountries(data);
  };
  return (
    <Container>
      <Grid container>
        <SearchBar />
      </Grid>
    </Container>
  );
};

export default Countries;
