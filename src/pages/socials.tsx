import { Stack, VStack, Box, Center, Avatar, Text } from "@chakra-ui/react";
import { chakra, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import { FaTwitter, FaTwitch, FaGithub, FaDiscord, FaSteam } from "react-icons/fa";
import { ReactNode } from "react";
import Head from "next/head";
import Layout from "../components/layouts/layout";

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
        <Layout>
            <Head>
                <title>Assasin | Socials</title>
                <meta name="description" content="All of Assassinsorrow's links and socials" />
            </Head>

            <Center p={2}>
                <Stack spacing={4} align={"center"} maxW={"xl"} w={"full"}>
                    <VStack spacing={0} maxW={"xl"}>
                        <Avatar
                            name="Assassin"
                            size={"xl"}
                            // TODO: figure out why images load slower when using a image from `public/`
                            src={"https://pbs.twimg.com/profile_images/1533042206189178885/Qye3arFj_400x400.jpg"}
                            loading={"eager"}
                        />
                        <Text fontSize={"3xl"}>Assassin</Text>
                        <Text>I do alot of dumb shit in VR</Text>
                    </VStack>
                    <SocialButton label={"Twitter"} href="https://twitter.com/assassinsorrow/">
                        <FaTwitter />
                        <Text>&nbsp;Twitter</Text>
                    </SocialButton>
                    <SocialButton label={"Twitch"} href="https://www.twitch.tv/assassinsorrow/">
                        <FaTwitch />
                        <Text>&nbsp;Twitch</Text>
                    </SocialButton>
                    <SocialButton label={"Github"} href="https://github.com/Assassinsorrow/">
                        <FaGithub />
                        <Text>&nbsp;Github</Text>
                    </SocialButton>
                    <SocialButton label={"Steam"} href="https://steamcommunity.com/id/assassinsorrow/">
                        <FaSteam />
                        <Text>&nbsp;Steam</Text>
                    </SocialButton>
                    <SocialButton label={"Twitter"} href="https://discord.com/">
                        <FaDiscord />
                        <Text>&nbsp;Discord</Text>
                    </SocialButton>
                </Stack>
            </Center>
        </Layout>
    );
}
