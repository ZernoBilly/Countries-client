import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  FilteredCountriesCountainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  FilteredCountriesItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "1rem",
    marginTop: "0.5rem",
    minWidth: "10rem",
    transition: "0.2s",
  },
  avatarPic: {
    width: "5rem",
  },
  listText: {
    marginLeft: "2rem",
  },
}));
