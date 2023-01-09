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
              backgroundColor: "rgb(40 51 78)",
              borderRadius: 8,
              padding: "8px 16px",
              color: "#CAD4E0",
              "&:hover": {
                backgroundColor: "rgb(40 51 78)",
              },
            }),
          ...(ownerState.variant === "outlined" && {
            backgroundColor: "#CAD4E0",
            border: `1px solid ${colors.cyan[900]}`,
            color: "#CAD4E0",
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
          color: "#CAD4E0",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...(theme.palette.mode === "dark" && {
            color: "#CAD4E0",
          }),
          ...(theme.palette.mode === "light" && {
            color: "black",
          }),
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...(theme.palette.mode === "light" && {
            color: "#CAD4E0",
          }),
          ...(theme.palette.mode === "dark" && {
            color: "#CAD4E0",
          }),
        }),
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...(theme.palette.mode === "light" && {}),
          ...(theme.palette.mode === "dark" && {
            backgroundColor: "rgb(40 51 78)",
            color: "#CAD4E0",
          }),
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...(theme.palette.mode === "light" && {
            color: "#CAD4E0",
          }),
          ...(theme.palette.mode === "dark" && {
            backgroundColor: "rgb(40 51 78)",
            color: "#CAD4E0",
            borderBottom: "1px solid #ffffff0d",
          }),
        }),
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...(theme.palette.mode === "light" && {
            color: "#CAD4E0",
          }),
          ...(theme.palette.mode === "dark" && {
            backgroundColor: "rgb(40 51 78)",
            color: "#CAD4E0",
          }),
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...(theme.palette.mode === "light" && {}),
          ...(theme.palette.mode === "dark" && {
            backgroundImage: "none",
            backgroundColor: "rgb(40 51 78)",
          }),
        }),
      },
    },
  },
});
export default theme;
