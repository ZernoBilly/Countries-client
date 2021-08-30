import React from "react";

import connected_world from "../../images/connected_world2.svg";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <img src={connected_world} className={classes.image} />
    </div>
  );
};

export default Header;
