import React, { useState, useEffect } from "react";
import { Grid, Box, Fab, Typography, Switch } from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LandscapeIcon from "@material-ui/icons/Landscape";

import useStyles from "./styles";

import FilteredCountriesList from "./FilteredCountriesList/FilteredCountriesList";

const Selection = ({ state }) => {
  const classes = useStyles();

  const [selectedValue, setSelectedValue] = useState("population");
  const [sortedAndSlicedValues, setSortedAndSlicedValues] = useState();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setSortedAndSlicedValues(
      !checked
        ? filteredValues.sort((b, a) => a.value - b.value).slice(0, 10)
        : filteredValues.sort((a, b) => a.value - b.value).slice(0, 10)
    );
  }, [selectedValue, checked]);

  const handleClick = (value) => {
    setSelectedValue(value);
  };

  const filteredValues = state.map((value) => {
    return { value: value[selectedValue], name: value.name, flag: value.flag };
  });

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid container className={classes.selectionContainer}>
      <Grid item xs={12} sm={7} className={classes.selectItem}>
        <Box className={classes.valueTextBox}>
          <Typography className={classes.valueText}>
            {selectedValue.toUpperCase()}
          </Typography>
        </Box>
        <Box className={classes.buttonBox}>
          <Fab
            conponent="button"
            value="population"
            onClick={() => handleClick("population")}
            name="population"
            className={classes.valueButton}
          >
            <PeopleAltIcon className={classes.valueIcon} />
          </Fab>
          <Fab
            conponent="button"
            value="area"
            onClick={() => handleClick("area")}
            name="area"
            className={classes.valueButton}
          >
            <LandscapeIcon className={classes.valueIcon} />
          </Fab>
        </Box>
        <Box className={classes.switchBox}>
          <Switch
            checked={checked}
            onChange={handleChange}
            className={classes.valueSwitch}
          />
        </Box>
      </Grid>

      <FilteredCountriesList sortedAndSlicedValues={sortedAndSlicedValues} />
    </Grid>
  );
};

export default Selection;
