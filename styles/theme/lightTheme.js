import { createTheme } from "@mui/material/styles";
import theme from "./theme";

const lightTheme = (dir) =>
  createTheme({
    ...theme(dir),
    palette: {
      ...theme(dir).palette,
      mode: "light",
      background: {
        default: "#efefef",
        paper: "#fcfcfc",
        over: "#f4f4f4",
      },
    },
  });

export default lightTheme;
