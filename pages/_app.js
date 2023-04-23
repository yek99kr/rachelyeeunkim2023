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
import { Inter } from "@next/font/google";

import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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

        {/* <link rel="preload" href="https://example.com/widget.html" as="document"></link> */}
      </Head>

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
            <main className={inter.className}>
              <div
                className={`transition-[0.5s] ${
                  router.pathname !== "/"
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <SearchBar />
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
