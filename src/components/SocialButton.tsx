import { ReactNode } from "react";
import { chakra, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";

// Chakra button doesn't have a god damn href prop i want to die
// TODO: probably shouldn't use `chakra.button` but thats a problem for future me
export default function SocialButton({ children, label, href }: { children: ReactNode; label: string; href: string }) {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.200", "whiteAlpha.200")}
            rounded={"full"}
            w={"full"}
            h={"10"}
            cursor={"pointer"}
            as={"a"}
            href={href}
            target={"_blank"}
            rel={"noopener noreferrer"}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.300", "whiteAlpha.300")
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
}
