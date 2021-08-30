import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  TopBar: {
    backgroundColor: theme.palette.primary.main,
  },
  toolBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: theme.palette.secondary.main,
  },
}));
