import React, { useEffect, useReducer } from "react";
import {
  globalThemeDispatchCtx,
  globalThemeStateCtx,
} from "context/globalTheme";
import globalThemeReducer, {
  initialStateGlobalTheme,
} from "reducer/globalThemeReducer";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "utils/createEmotionCache";
import { ThemeProvider } from "@mui/material/styles";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function GlobalThemeProvider({ children, props }) {
  const { emotionCache = clientSideEmotionCache } = props;
  //
  const [state, dispatch] = useReducer(
    globalThemeReducer,
    initialStateGlobalTheme
  );
  //
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = state.theme(
      state.dir
    ).palette.background.default;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.mode]);
  //
  return (
    <globalThemeDispatchCtx.Provider value={dispatch}>
      <globalThemeStateCtx.Provider value={state}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={state.theme(state.dir)}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children(state)}
          </ThemeProvider>
        </CacheProvider>
      </globalThemeStateCtx.Provider>
    </globalThemeDispatchCtx.Provider>
  );
}

export default GlobalThemeProvider;
