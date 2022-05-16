import Head from "next/head";
import PropTypes from "prop-types";
import CurrencyProvider from "provider/CurrencyProvider";
import GlobalThemeProvider from "provider/GlobalThemeProvider";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

export default function MyApp(props) {
  const { Component, pageProps } = props;

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      <CurrencyProvider>
        <GlobalThemeProvider props={props}>
          {({ dir }) => (
            <>
              <Head>
                <meta
                  name="viewport"
                  content="initial-scale=1, width=device-width"
                />
              </Head>
              <div dir={dir}>{getLayout(<Component {...pageProps} />)}</div>
            </>
          )}
        </GlobalThemeProvider>
      </CurrencyProvider>
    </QueryClientProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
