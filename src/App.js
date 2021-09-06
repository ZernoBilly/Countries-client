import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

import CountriesState from "./context/CountriesState";

import Home from "./pages/Home";
import TopTen from "./pages/TopTen";

import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.app}>
          <CountriesState>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/topten">
                <TopTen />
              </Route>
            </Switch>
          </CountriesState>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
