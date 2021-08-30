import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grid,
} from "@material-ui/core";

import useStyles from "./styles";

const CountriesList = ({ filteredCountries }) => {
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = useState();

  const handleClick = (event, idx) => {
    setSelectedIndex(idx);
  };

  console.log(selectedIndex);

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
                <ListItemAvatar>
                  <Avatar>
                    <img src={country.flag} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
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
