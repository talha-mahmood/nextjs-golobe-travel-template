import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import { ConfigProvider } from "antd";
import theme from "./theme/themeConfig";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Meezab Air</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ConfigProvider theme={theme}>
      <Component {...pageProps} />
      </ConfigProvider>
    </React.Fragment>
  );
}

export default MyApp;
