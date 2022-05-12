import { Stack, VStack, Box, Center, Avatar, Text } from "@chakra-ui/react";
import { chakra, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import { FaTwitter, FaTwitch, FaGithub, FaDiscord } from "react-icons/fa";
import { ReactNode } from "react";
import Head from "next/head";

// Chakra button doesnt have a god damn href prop i want to die
function SocialButton({ children, label, href }: { children: ReactNode; label: string; href: string }) {
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
export default function socials() {
    return (
        <Box>
            <Head>
                <title>Assasin | Socials</title>
            </Head>

            <Center p={8}>
                <Stack spacing={4} align={"center"} maxW={"xl"} w={"full"}>
                    <VStack spacing={0} maxW={"xl"}>
                        <Avatar name="Assassin" size={"xl"} />
                        <Text fontSize={"3xl"}>Assassin</Text>
                        <Text>I do alot of dumb shit in VR</Text>
                    </VStack>
                    <SocialButton label={"Twitch"} href="https://www.twitch.tv/">
                        <FaTwitch />
                        <Text>Twitch</Text>
                    </SocialButton>
                    <SocialButton label={"Twitter"} href="https://twitter.com/">
                        <FaTwitter />
                        <Text>Twitter</Text>
                    </SocialButton>
                    <SocialButton label={"Github"} href="https://github.com/">
                        <FaGithub />
                        <Text>Github</Text>
                    </SocialButton>
                    <SocialButton label={"Twitter"} href="https://www.twitch.tv/">
                        <FaDiscord />
                        <Text>Discord</Text>
                    </SocialButton>
                </Stack>
            </Center>
        </Box>
    );
}
