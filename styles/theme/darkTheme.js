import { createTheme } from "@mui/material/styles";
import theme from "./theme";

const darkTheme = (dir) =>
  createTheme({
    ...theme(dir),
    palette: {
      ...theme(dir).palette,
      mode: "dark",
      background: {
        default: "#111113",
        paper: "#1d1e22",
        over: "#2c2d31",
      },
    },
  });

export default darkTheme;
