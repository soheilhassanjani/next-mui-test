import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import appLayoutConfig from "config/appLayout.config";
import { useAppLayoutState } from "hook/appLayout";
import { NextLinkComposed } from "components/Link";

function ListItem({ icon, label, pathname }) {
  const { open } = useAppLayoutState();
  return (
    <ListItemButton
      component={NextLinkComposed}
      to={{
        pathname,
      }}
      sx={{
        minHeight: 48,
        justifyContent: "center",
        px: 2.5,
        width: open
          ? appLayoutConfig.drawerOpenWidth
          : appLayoutConfig.drawerCloseWidth,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : "auto",
          justifyContent: "center",
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  );
}

export default ListItem;
