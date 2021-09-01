import { makeStyles } from "@material-ui/core";

import bgImage from "./images/bg-image.jpg";

export default makeStyles((theme) => ({
  app: {
    padding: "0",
    margin: "0",
    height: "100vh",
    backgroundImage: `url(${bgImage})`,
  },
}));
