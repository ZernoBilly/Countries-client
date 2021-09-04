import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Fab,
} from "@material-ui/core";

import ForwardIcon from "@material-ui/icons/Forward";

import useStyles from "./styles";

const TopBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.AppBar}>
      <Toolbar className={classes.toolBar}>
        <Typography className={classes.title} variant="h5" component="h1">
          Countries
        </Typography>
        <Fab className={classes.button} size="medium">
          <ForwardIcon className={classes.icon} />
        </Fab>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
