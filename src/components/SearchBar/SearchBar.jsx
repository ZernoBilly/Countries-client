import React from "react";
import { InputBase, Grid, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";

const SearchBar = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.searchContainer}>
      <Grid item xs={12} className={classes.searchItem}>
        <InputBase
          placeholder="Search..."
          className={classes.input}
        ></InputBase>
        <SearchIcon className={classes.searchIcon} />
      </Grid>
      <Grid item xs={12} className={classes.searchItem}>
        <Typography className={classes.infoText}>
          Please, more specific
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
