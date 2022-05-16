import { useContext } from "react";
import {
  globalThemeDispatchCtx,
  globalThemeStateCtx,
} from "context/globalTheme";

export const useGlobalThemeState = () => useContext(globalThemeStateCtx);
export const useGlobalThemeDispatch = () => useContext(globalThemeDispatchCtx);
