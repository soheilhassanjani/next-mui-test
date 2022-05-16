import React from "react";
import List from "@mui/material/List";
import ListItem from "container/layout/AppLayout/AppLayoutNavMenu/ListItem";
import navMenu from "constant/navMenu";

function AppLayoutNavMenu() {
  return (
    <>
      <List>
        {navMenu.map((item, i) => (
          <ListItem
            key={i}
            icon={item.icon}
            label={item.label}
            pathname={item.pathname}
          />
        ))}
      </List>
    </>
  );
}

export default AppLayoutNavMenu;
