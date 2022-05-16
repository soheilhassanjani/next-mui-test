import React from "react";
import { Main } from "container/layout/AppLayout/AppLayoutMain/style";

function AppLayoutMain({ children }) {
  return <Main component="main">{children}</Main>;
}

export default AppLayoutMain;
