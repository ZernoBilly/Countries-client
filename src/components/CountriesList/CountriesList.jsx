import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grid,
  Grow,
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
              <Grow in={true} timeout={500} key={idx}>
                <ListItem
                  button
                  key={idx}
                  className={classes.listItem}
                  onClick={(event) => handleClick(event, idx)}
                >
                  <ListItemAvatar className={classes.avatarItem} key={idx}>
                    <Avatar
                      variant="rounded"
                      src={country.flag}
                      className={classes.avatarPic}
                      key={idx}
                    ></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    className={classes.listText}
                    primary={country.name}
                    secondary={country.region}
                  />
                </ListItem>
              </Grow>
            ))
          : ""}
      </List>
    </Grid>
  );
};

export default CountriesList;
