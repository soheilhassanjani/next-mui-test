import * as React from "react";
import Box from "@mui/material/Box";
import AppLayoutHeader from "container/layout/AppLayout/AppLayoutHeader";
import AppLayoutProvider from "provider/AppLayoutProvider";
import AppLayoutNav from "container/layout/AppLayout/AppLayoutNav";
import AppLayoutMain from "container/layout/AppLayout/AppLayoutMain";

function AppLayout({ children }) {
  return (
    <AppLayoutProvider>
      <Box display="flex">
        <AppLayoutHeader />
        <AppLayoutNav />
        <AppLayoutMain>{children}</AppLayoutMain>
      </Box>
    </AppLayoutProvider>
  );
}

export default AppLayout;
