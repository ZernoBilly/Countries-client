import React, { useState, useReducer } from "react";

import CountriesContext from "./context";
import CountriesReducer from "./CountriesReducer";
import { FETCH_ALL_COUNTRIES } from "./constants";

const CountriesState = (props) => {
  const initState = [
    {
      name: "",
      capital: "",
      population: "",
      currencies: [{}],
      flag: "",
      region: "",
      subregion: "",
      area: "",
      timezones: [],
      languages: [{}],
    },
  ];

  const [state, dispatch] = useReducer(CountriesReducer, initState);
  const [countrySearch, setCountrySearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([{}]);

  const setCountries = (countries) => {
    dispatch({
      type: FETCH_ALL_COUNTRIES,
      payload: countries,
    });
  };

  return (
    <CountriesContext.Provider
      value={{
        state,
        setCountries,
        countrySearch,
        setCountrySearch,
        filteredCountries,
        setFilteredCountries,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesState;
