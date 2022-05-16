import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useAppLayoutState } from "hook/appLayout";
import { Header } from "container/layout/AppLayout/AppLayoutHeader/style";
import { Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useGlobalThemeDispatch, useGlobalThemeState } from "hook/globalTheme";

function AppLayoutHeader() {
  const { open } = useAppLayoutState();
  const dispatch = useGlobalThemeDispatch();
  const { mode } = useGlobalThemeState();
  //
  const isDark = mode === "dark";
  //
  return (
    <Header open={open}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" color="text.primary">
          Mini variant drawer
        </Typography>
        <Box ml="auto">
          <IconButton onClick={() => dispatch({ type: "TOGGLE_MODE" })}>
            {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </Header>
  );
}

export default AppLayoutHeader;
