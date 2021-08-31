import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grid,
} from "@material-ui/core";

import useStyles from "./styles";

const CountriesList = ({ filteredCountries, setFilteredCountries }) => {
  const classes = useStyles();

  const handleClick = (event, idx) => {
    setFilteredCountries([filteredCountries[idx]]);
  };

  return (
    <Grid container className={classes.listContainer}>
      <List>
        {filteredCountries.length <= 10
          ? filteredCountries.map((country, idx) => (
              <ListItem
                button
                key={idx}
                className={classes.listItem}
                onClick={(event) => handleClick(event, idx)}
              >
                <ListItemAvatar className={classes.avatarItem}>
                  <Avatar
                    variant="rounded"
                    src={country.flag}
                    className={classes.avatarPic}
                  ></Avatar>
                </ListItemAvatar>
                <ListItemText
                  className={classes.listText}
                  primary={country.name}
                  secondary={country.region}
                />
              </ListItem>
            ))
          : ""}
      </List>
    </Grid>
  );
};

export default CountriesList;
