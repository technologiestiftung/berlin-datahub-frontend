import { StrictMode, FC, useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "theme-ui";
import { StoreProvider } from "easy-peasy";
import Head from "next/head";

import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { CookieBanner } from "@components/CookieBanner";

import store from "@state/store";

import theme from "@style/theme";
// import '../src/style/global.css';

// if (process.env.NODE_ENV === "development") {
//   import("../src/mocks/browser").then(({ worker }) => worker.start());
// }

const publicURL = process.env.NODE_ENV === "development" ? '' : 'https://berlin-iot-hub.netlify.app';

const App: FC<{
  Component: FC;
  pageProps: Record<string, unknown>;
}> = ({ Component, pageProps }) => {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <StrictMode>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <Head>
            <link rel="icon" href={`${publicURL}/favicon.ico`} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
              name="description"
              content="Das Berlin IoT Hub ist eine prototypische Offene Datenplattform, die Sensordaten aus Forschungsprojekten der Technologiestiftung Berlin speichert und frei verfügbar macht"
            />
            <link rel="apple-touch-icon" href={`${publicURL}/logo192.png`} />
            <link rel="manifest" href={`${publicURL}/manifest.json`} />
            <title>Berlin IoT Hub | Technologiestiftung Berlin</title>
          </Head>
          <Header />
          <main sx={{ minHeight: "100vh", zIndex: 0 }}>
            <Component {...pageProps} />
          </main>
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </StoreProvider>
    </StrictMode>
  );
};

export default App;