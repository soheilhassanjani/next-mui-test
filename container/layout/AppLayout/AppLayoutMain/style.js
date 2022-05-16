import { styled, experimental_sx as sx } from "@mui/material";
import Box from "@mui/material/Box";
import appLayoutConfig from "config/appLayout.config";

const Main = styled(Box)(
  sx({
    flexGrow: 1,
    mt: `${appLayoutConfig.hightHeader}px`,
  })
);

export { Main };
