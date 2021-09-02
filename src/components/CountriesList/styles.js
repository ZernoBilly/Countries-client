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
    marginTop: "0.5rem",
    transition: "0.2s",

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  avatarItem: {},
  avatarPic: {
    width: "5rem",
  },
  listText: {
    marginLeft: "1rem",
  },
}));
