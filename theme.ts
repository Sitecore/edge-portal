import { createMuiTheme } from "@material-ui/core/styles";
import {
  Theme as MuiTheme,
  ThemeOptions,
} from "@material-ui/core/styles/createMuiTheme";

const options = {
  palette: {
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    type: "light",
    primary: {
      main: "#fe2911",
    },
    secondary: {
      main: "#137C7A",
    },
    warning: {
      main: "#faaf4a",
    },
    info: {
      main: "#0085eb",
    },
    success: {
      main: "#673ab7",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "'Open Sans', 'Helvetica', 'Arial', sans-serif",
    fontWeightBold: 600,
  },
  overrides: {
    MuiTooltip: {
      tooltip: { fontSize: "14px !important" },
    },
    MuiTypography: {
      caption: { fontSize: "0.9rem" },
    },
  },
};
const Theme: MuiTheme = createMuiTheme(options as ThemeOptions);

Theme.typography.h3 = {
  fontWeight: 400,
  fontFamily: "'Open Sans', 'Helvetica', 'Arial', sans-serif",
  fontSize: "1.5rem",
  textTransform: "uppercase",
};

export default Theme;
