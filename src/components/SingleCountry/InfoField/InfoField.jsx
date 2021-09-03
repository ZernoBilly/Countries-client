import React from "react";
import { Box, Typography } from "@material-ui/core";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LandscapeIcon from "@material-ui/icons/Landscape";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import CallIcon from "@material-ui/icons/Call";
import MyLocationIcon from "@material-ui/icons/MyLocation";

import useStyles from "./styles";

export const InfoField = ({ value, marking, icon }) => {
  const classes = useStyles();

  const icons = (_value) => {
    switch (_value) {
      case "capital":
        return <LocationCityIcon className={classes.icon} />;
      case "population":
        return <PeopleAltIcon className={classes.icon} />;
      case "area":
        return <LandscapeIcon className={classes.icon} />;
      case "currencies":
        return <AttachMoneyIcon className={classes.icon} />;
      case "languages":
        return <GTranslateIcon className={classes.icon} />;
      case "callingCodes":
        return <CallIcon className={classes.icon} />;
      case "location":
        return <MyLocationIcon className={classes.icon} />;
    }
  };

  return (
    <Box className={classes.infoFieldBox}>
      {icons(icon)}
      <Typography variant="h5" className={classes.valueText}>
        {Array.isArray(value) ? value.join(", ") : value}
      </Typography>
      <Typography variant="subtitle2" className={classes.marking}>
        {marking}
      </Typography>
    </Box>
  );
};
