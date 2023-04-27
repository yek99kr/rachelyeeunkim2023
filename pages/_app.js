import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { linkResolver, repositoryName } from "../prismicio";
import { PrismicPreview } from "@prismicio/next";
import Footers from "../components/Footers";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { AppContextProvider } from "../context/AppContext";
import SearchBar from "../components/SearchBar";
import Router from "next/router";
import Menu from "../components/Menu";
import { GoogleAnalytics } from "nextjs-google-analytics";

import Head from "next/head";

export default function App({ router, Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      <Head>
        {/* <link rel="preload" href="/path/to/image.ext" as="image" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bellota&family=Underdog&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Rachel Yeeun Kim</title>
        <meta name="description" content="Rachel Yeeun Kim's website." />
        <meta property="og:title" content="Rachel Yeeun Kim" />
        <meta property="og:description" content="Rachel Yeeun Kim's website." />
        <meta property="og:url" content="realgood.tv" />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content="Rachel Yeeun Kim" />
        <meta
          property="twitter:description"
          content="Rachel Yeeun Kim's website."
        />

        <meta property="twitter:image" content="/meta.jpg" />
        <meta property="og:image" content="/meta.jpg" />
        <meta property="og:video" content="/meta.jpg" />
        <meta property="twitter:image:alt" content="Rachel Yeeun Kim" />
        <meta property="og:site_name" content="Rachel Yeeun Kim" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicon/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicon/favicon-16x16.png"
          sizes="16x16"
        />
        {/* <link rel="preload" href="https://example.com/widget.html" as="document"></link> */}
      </Head>
      <GoogleAnalytics strategy="lazyOnload" />

      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>{children}</a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <AppContextProvider>
            <main>
              <div
                className={`transition-[0.5s] ${
                  router.pathname !== "/"
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <SearchBar />
                <Menu />
              </div>
              <AnimatePresence
                // mode="wait"
                // initial={false}
                exitBeforeEnter
                onExitComplete={() => window.scrollTo(0, 0)}
              >
                <Component {...pageProps} router={router} key={router.asPath} />
              </AnimatePresence>
            </main>

            <Footers />
          </AppContextProvider>
        </PrismicPreview>
      </PrismicProvider>
    </>
  );
}
