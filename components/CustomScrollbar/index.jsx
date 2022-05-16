import React from "react";
import { useTheme } from "@mui/material";
import classNames from "classnames";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/css/OverlayScrollbars.css";

function CustomScrollbar({ children, options = {}, className, ...props }) {
  const { palette } = useTheme();
  return (
    <OverlayScrollbarsComponent
      options={{
        ...options,
        scrollbars: { autoHide: "move", ...options.scrollbars },
      }}
      className={classNames(
        palette.mode !== "dark" ? "os-theme-dark" : "os-theme-light",
        className
      )}
      {...props}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
}

export default CustomScrollbar;
