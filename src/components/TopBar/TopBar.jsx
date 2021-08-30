import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import ForwardIcon from "@material-ui/icons/Forward";

import useStyles from "./styles";

const TopBar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.toolBar}>
        <Typography className={classes.title} variant="h4" component="h1">
          Countries
        </Typography>
        <IconButton>
          <Typography>TopTen</Typography>
          <ForwardIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
