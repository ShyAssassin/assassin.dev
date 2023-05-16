import { ChakraProvider } from "@chakra-ui/react";
import theme from "@lib/theme";
import Head from "next/head";
import type { AppProps } from "next/app";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import { AnimatePresence } from "framer-motion";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>
            <Analytics />
            <NavBar router={router.pathname} />
            {/* 
                for some reason animating on page load sometimes causes the entire page to freeze for a second
                when loaded for the first time if nothing is cached on some chromium based broswers?????? 
                TODO: this is fucked figure out what is wrong; most probably a issue with something wanting to be loaded and taking too long
            */}
            <AnimatePresence mode={"wait"} initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
                <Component {...pageProps} key={router.route} />
                <Footer />
            </AnimatePresence>
        </ChakraProvider>
    );
}
