import React from "react";

import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

import CountriesState from "./context/CountriesState";

import bgImage from "./images/bg-image.jpg";

import Home from "./pages/Home";

import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <CountriesState>
          <Home />
        </CountriesState>
      </div>
    </ThemeProvider>
  );
}

export default App;
