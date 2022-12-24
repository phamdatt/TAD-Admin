import {
    ThemeOptions
} from "@mui/material";
import theme from "../theme";

export const darkTheme: ThemeOptions = {
    ...theme,
    palette: {
      mode: "dark",
    },
  };
  export const lightTheme: ThemeOptions = {
    ...theme,
    palette: {
      mode: "light",
    },
  };