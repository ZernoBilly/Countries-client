import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  infoFieldBox: {
    display: "flex",
    position: "relative",
    height: "3rem",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: theme.palette.primary.main,
    borderRadius: "0.5rem",
  },
  icon: {
    position: "absolute",
    left: "0.5rem",
    fontSize: "3rem",
    color: theme.palette.warning.dark,
  },
  valueText: {
    fontSize: "1.2rem",
  },
  marking: {
    fontSize: "0.6rem",
    marginLeft: "0.3rem",
  },
}));
