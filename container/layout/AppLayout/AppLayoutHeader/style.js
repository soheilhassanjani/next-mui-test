import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import appLayoutConfig from "config/appLayout.config";

export const Header = styled(Box)(({ theme, open }) => ({
  background: theme.palette.background.paper,
  position: "fixed",
  zIndex: theme.zIndex.drawer - 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  height: `${appLayoutConfig.hightHeader}px`,
  marginLeft: appLayoutConfig.drawerCloseWidth,
  width: `calc(100% - ${appLayoutConfig.drawerCloseWidth}px)`,
  ...(open && {
    marginLeft: appLayoutConfig.drawerOpenWidth,
    width: `calc(100% - ${appLayoutConfig.drawerOpenWidth}px)`,
  }),
}));
