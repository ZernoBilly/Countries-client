import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "8rem",
  },
  searchItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: theme.palette.optional.main,
    paddingLeft: "1rem",
    borderTopLeftRadius: "0.5rem",
    borderBottomLeftRadius: "0.5rem",
    fontSize: "2rem",
    transition: "0.2s",

    "&:hover": {
      backgroundColor: theme.palette.optional.light,
    },
  },
  searchIcon: {
    backgroundColor: theme.palette.optional.main,
    fontSize: "3.2rem",
    borderTopRightRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
    transition: "0.2s",
    color: theme.palette.secondary.dark,

    "&:hover": {
      backgroundColor: theme.palette.optional.light,
    },
  },

  searchButton: {
    margin: "0",
    padding: "0",
  },
  infoText: {
    color: theme.palette.warning.main,
    fontSize: "1.2rem",
  },
}));
