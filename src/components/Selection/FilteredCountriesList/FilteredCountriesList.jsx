import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grow,
} from "@material-ui/core";

import useStyles from "./styles";

const FilteredCountriesList = ({ sortedAndSlicedValues }) => {
  const classes = useStyles();

  const numberWithCommas = (value) => {
    if (value > 1000) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    } else {
      return value;
    }
  };
  return (
    <Grid container className={classes.FilteredCountriesCountainer}>
      <List>
        {sortedAndSlicedValues
          ? sortedAndSlicedValues.map((values, idx) => (
              <Grow in={true} timeout={500} key={idx}>
                <ListItem className={classes.listItem}>
                  <ListItemAvatar className={classes.avatarItem} key={idx}>
                    <Avatar
                      variant="rounded"
                      src={values.flag}
                      className={classes.avatarPic}
                      key={idx}
                    ></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={numberWithCommas(values.value)}
                    secondary={values.name}
                    className={classes.listText}
                  />
                </ListItem>
              </Grow>
            ))
          : ""}
      </List>
    </Grid>
  );
};

export default FilteredCountriesList;
