import { Button, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NavBarLink({ href, children, path, ...props }) {
    const active = path === href;
    const backgroundColor = useColorModeValue("gray.100", "gray.700");
    return (
        <NextLink href={href} passHref scroll={false}>
            <Button
                size={"md"}
                rounded={"md"}
                variant={"ghost"}
                alignItems={"center"}
                boxShadow={"none !important"} // Why is this here?
                bg={active ? backgroundColor : "transparent"}
                fontWeight={active ? "bold" : "normal"}
                {...props}>
                {children}
            </Button>
        </NextLink>
    );
}
