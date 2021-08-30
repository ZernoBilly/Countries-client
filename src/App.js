import React from "react";

import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

import CountriesState from "./context/CountriesState";

import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CountriesState>
          <Home />
        </CountriesState>
      </div>
    </ThemeProvider>
  );
}

export default App;
