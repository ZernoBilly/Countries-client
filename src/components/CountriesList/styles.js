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
  },
  avatarItem: {},
  avatarPic: {
    width: "5rem",
  },
  listText: {
    marginLeft: "1rem",
  },
}));
