import { Box } from "@chakra-ui/react";

export default function Footer() {
    return (
        // for some reason align isnt a type? 
        // @ts-ignore
        <Box align="center" opacity={0.4} fontSize="sm"> 
            &copy; {new Date().getFullYear()} Assassinsorrow. All Rights Reserved.
        </Box>
    );
}
