import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  selectionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  selectItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonBox: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    minWidth: "80%",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    backgroundColor: theme.palette.optional.main,
    borderRadius: "1rem",

    [theme.breakpoints.down("sm")]: {
      minWidth: "90%",
    },
  },
  valueButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.dark,
    transition: "0.3s",

    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.primary.main,
    },
  },
  valueIcon: {
    fontSize: "2.3rem",
  },

  switchBox: {
    display: "flex",
    justifyContent: "center",
    width: "6rem",
    backgroundColor: theme.palette.optional.main,
    borderBottomRightRadius: "1rem",
    borderBottomLeftRadius: "1rem",
    border: "2px solid",
    borderColor: theme.palette.secondary.dark,
  },

  valueSwitch: {
    color: theme.palette.info.main,

    "&:hover": {
      color: theme.palette.warning.main,
    },
  },

  input: {
    heigth: "1rem",
  },

  valueTextBox: {
    display: "flex",
    justifyContent: "center",
    width: "15rem",
    backgroundColor: theme.palette.optional.main,
    borderTopRightRadius: "1rem",
    borderTopLeftRadius: "1rem",
    border: "2px solid",
    borderColor: theme.palette.secondary.dark,
  },
  valueText: {
    fontSize: "1.5rem",
    color: theme.palette.secondary.dark,
  },
}));
