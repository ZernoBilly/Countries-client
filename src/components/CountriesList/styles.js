import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  listContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "1rem",
  },
}));
