import React from "react";
import { InputBase, Grid, Typography, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import useStyles from "./styles";

const SearchBar = ({ setCountrySearch, countrySearch, filteredCountries }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setCountrySearch(e.target.value);
  };

  const clear = () => {
    setCountrySearch("");
  };

  return (
    <Grid container className={classes.searchContainer}>
      <Grid item xs={12} className={classes.searchItem}>
        <InputBase
          value={countrySearch}
          placeholder="Search..."
          className={classes.input}
          onChange={handleChange}
        ></InputBase>
        {!countrySearch ? (
          <SearchIcon className={classes.searchIcon} />
        ) : (
          <IconButton onClick={clear} className={classes.searchButton}>
            {" "}
            <HighlightOffIcon className={classes.searchIcon} />
          </IconButton>
        )}
      </Grid>
      <Grid item xs={12} className={classes.searchItem}>
        <Typography className={classes.infoText}>
          {countrySearch && filteredCountries.length === 0
            ? "No match found!"
            : filteredCountries.length >= 10 && countrySearch !== ""
            ? "Too many results!"
            : ""}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
