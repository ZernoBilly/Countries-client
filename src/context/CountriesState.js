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
    },
  ];

  const [state, dispatch] = useReducer(CountriesReducer, initState);

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
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesState;
