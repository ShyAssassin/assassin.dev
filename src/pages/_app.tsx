import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";

export default function App({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} key={router.route} />
        </ChakraProvider>
    );
}
