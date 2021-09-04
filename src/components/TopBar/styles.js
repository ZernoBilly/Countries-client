import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  TopBar: {
    backgroundColor: theme.palette.secondary.main,
  },
  toolBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: theme.palette.secondary.main,
  },

  button: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.optional.light,
    position: "relative",
    transition: "0.3s",
    heigth: "2rem",

    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.optional.light,
    },
  },

  icon: {
    color: theme.palette.secondary.dark,
    fontSize: "2.5rem",
    position: "absolute",
    transition: "0.5s",
    padding: "3.2rem, 3.2rem",

    "&:hover": {
      color: theme.palette.optional.light,
      paddingLeft: "1.4rem",
    },
  },
}));
