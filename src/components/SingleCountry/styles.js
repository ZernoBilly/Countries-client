import { makeStyles } from "@material-ui/core";

import europe from "../../images/asia.jpg";

export default makeStyles((theme) => ({
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3rem",
    backgroundImage: `url(${europe})`,
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
    maxWidth: "80%",
    width: "80%",
    marginTop: "0.5rem",
    elevation: "8",
  },
}));
