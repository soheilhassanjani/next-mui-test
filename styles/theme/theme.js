import { red } from "@mui/material/colors";
import { experimental_sx as sx } from "@mui/material/styles";

// Create a theme instance.
const theme = (dir) => ({
  direction: dir,
  palette: {
    primary: {
      main: "#7b62ff",
    },
  },
  components: {
    MuiContainer: { defaultProps: { maxWidth: "auto" } },
    MuiGrid: {
      defaultProps: {
        columns: 24,
        spacing: 2,
        columnSpacing: 2,
        rowSpacing: 2,
      },
    },
    MuiButton: {
      defaultProps: { variant: "contained", disableElevation: true },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "unset",
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: "body1", fontWeight: "bold" },
      },
      styleOverrides: {
        root: {
          paddingBottom: "4px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "8px",
          ":last-child": {
            paddingBottom: "8px",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "6px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: sx({
          fontSize: ({ typography }) => typography.subtitle2.fontSize,
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        size: "small",
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState }) => {
          if (ownerState.size === "small") return { height: "23px" };
        },
      },
    },
  },
});

export default theme;
