import { styled, experimental_sx as sx } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import appLayoutConfig from "config/appLayout.config";

export const HeadContainer = styled(ListItem)(({ open }) =>
  sx({
    justifyContent: "center",
    alignItems: "center",
    px: 2.5,
    width: open
      ? appLayoutConfig.drawerOpenWidth
      : appLayoutConfig.drawerCloseWidth,
  })
);

export const IconContainer = styled(ListItemIcon)(({ open }) =>
  sx({
    minWidth: 0,
    mr: open ? 3 : "auto",
    justifyContent: "center",
    cursor: "pointer",
  })
);
