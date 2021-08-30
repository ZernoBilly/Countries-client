import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D3E3FC",
      dark: "#939eb0",
      light: "#dbe8fc",
    },
    secondary: {
      main: "#434d5c",
      dark: "#2e3540",
      ligth: "#68707c",
    },
    optional: {
      main: "#FFCCBC",
      dark: "#b28e83",
      light: "#ffd6c9",
    },
    succes: {
      main: "00887A",
      dark: "#005f55",
      light: "#339f94",
    },
    info: {
      main: "#63F1FF",
      dark: "#45a8b2",
      light: "#82f3ff",
    },
  },
});

export default theme;

//#63F1FF light blue
//#434d5c grey
//#00887A green
//#D3E3FC light grey
//#FFCCBC light orange
