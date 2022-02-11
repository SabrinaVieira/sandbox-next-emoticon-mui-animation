import Head from "next/head";
import type { AppProps } from "next/app";

import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/styles/utility/createEmotionCache";


import "../src/styles/global.ts";
//import { darkTheme as themeMui} from "../src/styles/themeMui";

interface MyAppProps extends AppProps {                                              
  emotionCache?: EmotionCache;
}
const clientSideEmotionCache = createEmotionCache();
// const darkTheme = createTheme(themeMui);

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <CssBaseline />
          <Component {...pageProps} />
      {/* <ThemeProvider theme={darkTheme}>
       
      </ThemeProvider> */}
    </CacheProvider>
  );
}