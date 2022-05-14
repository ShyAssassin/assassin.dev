import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import Head from "next/head";

export default function App({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>
            <Component {...pageProps} key={router.route} />
        </ChakraProvider>
    );
}
