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
  text: {
    fontSize: "1.1rem",
    color: theme.palette.secondary.light,
  },
  button: {
    fontSize: "1.1rem",
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.optional.light,
    transition: "0.3s",

    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.optional.light,
    },
  },
}));
