import React from "react";
import { AppBar, Toolbar, Typography, Fab } from "@material-ui/core";

import { Link } from "react-router-dom";

import ForwardIcon from "@material-ui/icons/Forward";

import useStyles from "./styles";

const TopBar = ({ title, link }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.AppBar}>
      <Toolbar className={classes.toolBar}>
        <Typography className={classes.title} variant="h5" component="h1">
          {title}
        </Typography>
        <Link to={link}>
          <Fab className={classes.button} size="medium">
            <ForwardIcon className={classes.icon} />
          </Fab>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
