import React from "react";
import { useAppLayoutState } from "hook/appLayout";
import AppLayoutNavHead from "container/layout/AppLayout/AppLayoutNavHead";
import AppLayoutNavMenu from "container/layout/AppLayout/AppLayoutNavMenu";
import Drawer from "container/layout/AppLayout/AppLayoutNav/style";

function AppLayoutNav() {
  const { open } = useAppLayoutState();
  return (
    <Drawer variant="permanent" open={open}>
      <AppLayoutNavHead />
      <AppLayoutNavMenu />
    </Drawer>
  );
}

export default AppLayoutNav;
