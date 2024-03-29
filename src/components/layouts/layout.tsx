import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
};

export default function Layout({ children }) {
    return (
        <Container maxW={"2xl"}>
            <motion.main
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.3, type: "easeInOut" }}
                style={{ position: "relative" }}>
                {children}
            </motion.main>
        </Container>
    );
}
