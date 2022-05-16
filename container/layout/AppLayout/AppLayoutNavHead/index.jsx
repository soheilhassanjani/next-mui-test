import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import { useAppLayoutDispatch, useAppLayoutState } from "hook/appLayout";
import {
  HeadContainer,
  IconContainer,
} from "container/layout/AppLayout/AppLayoutNavHead/style";

function AppLayoutNavHead() {
  const { open } = useAppLayoutState();
  const dispatch = useAppLayoutDispatch();
  return (
    <Box component={List}>
      <HeadContainer open={open}>
        <IconContainer onClick={() => dispatch({ type: "TOGGLE" })} open={open}>
          <MenuIcon />
        </IconContainer>
        <ListItemText
          primary={"صرافی ارز دیجیتال"}
          sx={{ opacity: open ? 1 : 0 }}
        />
      </HeadContainer>
    </Box>
  );
}

export default AppLayoutNavHead;
