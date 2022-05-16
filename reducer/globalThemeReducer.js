import lightTheme from "styles/theme/lightTheme";
import darkTheme from "styles/theme/darkTheme";

export const initialStateGlobalTheme = {
  mode: "light",
  dir: "rtl",
  theme: lightTheme,
};

const globalThemeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MODE":
      const isDark = state.mode === "dark";
      return {
        ...state,
        mode: isDark ? "light" : "dark",
        theme: isDark ? lightTheme : darkTheme,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export default globalThemeReducer;
