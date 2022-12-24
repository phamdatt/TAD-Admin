import { createTheme } from "@mui/material/styles";
import colors from "./colors";
const theme = createTheme({
  palette: {
    primary: {
      main: colors.cyan[900],
      contrastText: "#fff",
    },
    mode: "light",
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: colors.cyan[900],
              borderRadius: 8,
              padding: "8px 16px",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#155e75",
              },
            }),
          ...(ownerState.variant === "outlined" && {
            backgroundColor: "#fff",
            border: `1px solid ${colors.cyan[900]}`,
            color: colors.cyan[900],
            padding: "8px 16px",
            borderRadius: 8,
          }),
        }),
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: colors.cyan[900],
          color: "#fff",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...(theme.palette.mode === "dark" && {
            color: "white",
          }),
          ...(theme.palette.mode === "light" && {
            color: "black",
          }),
        }),
      },
    },
  },
});
export default theme;
