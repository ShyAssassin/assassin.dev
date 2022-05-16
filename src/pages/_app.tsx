import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
    return (
        // TODO: remove chakra
        <ChakraProvider theme={theme}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>
            <NavBar router={router.pathname} />
            <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </ChakraProvider>
    );
}
