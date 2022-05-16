import { styled } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import appLayoutConfig from "config/appLayout.config";

const openedMixin = {
  width: appLayoutConfig.drawerOpenWidth,
};

const closedMixin = {
  width: appLayoutConfig.drawerCloseWidth,
};

const Drawer = styled(MuiDrawer)(({ theme, open }) => {
  const isDark = theme.palette.mode === "dark";
  return {
    zIndex: theme.zIndex.drawer,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open ? openedMixin : closedMixin),
    "& .MuiDrawer-paper": {
      ...(open ? openedMixin : closedMixin),
      boxShadow: `0 0 14px rgb(0 0 0 / ${isDark ? 24 : 8}%)`,
      borderRight: 0,
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  };
});

export default Drawer;
