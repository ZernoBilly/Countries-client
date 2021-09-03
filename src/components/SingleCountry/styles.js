import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  titleItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
    height: "7rem",
    opacity: "1",
  },
  countryNameTitle: {
    color: theme.palette.primary.light,
    fontSize: "3rem",
    opacity: "1",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },

  image: {
    height: "5rem",
    marginLeft: "0.5rem",
  },
  valuesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
    marginLeft: "1rem",
    background: "none",
  },
  valueItem: {
    maxWidth: "100%",
    width: "80%",
    marginTop: "0.5rem",
    elevation: "8",
  },
  closeButtonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    marginBottom: "2rem",
  },
  closeButton: {
    background: theme.palette.info.main,
    elevation: "theme{10}",

    "&:hover": {
      backgroundColor: theme.palette.warning.main,
      elevation: "theme{0}",
    },
  },
  closeButtonIcon: {
    color: theme.palette.secondary.dark,
    fontSize: "3rem",
    transition: "0.2s",
    elevation: "theme{10}",

    "&:hover": {
      elevation: "theme{0}",
      color: theme.palette.secondary.light,
    },
  },
}));
