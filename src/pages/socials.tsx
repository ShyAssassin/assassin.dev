import { FaTwitter, FaTwitch, FaGithub, FaSteam, FaMastodon, FaKey, FaBluesky } from "react-icons/fa";
import { Stack, VStack, Center, Text } from "@chakra-ui/react";
import { SiKofi } from "react-icons/si";
import Head from "next/head";
import Layout from "@components/layouts/layout";
import ProfilePicture from "@components/ProfilePicture";
import SocialButton from "@components/SocialButton";

export default function Socials() {
    return (
        <Layout>
            <Head>
                <title>Assassin | Socials</title>
                <meta name="description" content="All of ShyAssassin's links and socials" />
            </Head>

            <Center p={2}>
                <Stack spacing={4} align={"center"} maxW={"xl"} w={"full"}>
                    <VStack spacing={0} maxW={"xl"}>
                        <ProfilePicture />
                        <Text fontSize={"3xl"} fontWeight={"semibold"}>
                            [Assassin]
                        </Text>
                        <Text>I do alot of dumb stuff in VR</Text>
                    </VStack>
                    <SocialButton label={"PGP Key"} href="https://pgp.assassin.dev/">
                        <FaKey />
                        <Text>&nbsp;PGP Keys</Text>
                    </SocialButton>
                    <SocialButton label={"Github"} href="https://github.com/ShyAssassin/">
                        <FaGithub />
                        <Text>&nbsp;Github</Text>
                    </SocialButton>
                    <SocialButton label={"BlueSky"} href="https://bsky.app/profile/assassin.dev">
                        <FaBluesky />
                        <Text>&nbsp;Bluesky</Text>
                    </SocialButton>
                    <SocialButton label={"Twitter"} href="https://twitter.com/ShyyAssassin/">
                        <FaTwitter />
                        <Text>&nbsp;Twitter</Text>
                    </SocialButton>
                    <SocialButton label={"Twitch"} href="https://www.twitch.tv/ShyyAssassin/">
                        <FaTwitch />
                        <Text>&nbsp;Twitch</Text>
                    </SocialButton>
                    <SocialButton label={"Ko-Fi"} href="https://ko-fi.com/ShyAssassin/">
                        <SiKofi />
                        <Text>&nbsp;Ko-Fi</Text>
                    </SocialButton>
                    <SocialButton label={"Steam"} href="https://steamcommunity.com/id/ShyyAssassin/">
                        <FaSteam />
                        <Text>&nbsp;Steam</Text>
                    </SocialButton>
                    <SocialButton label="Mastodon" href="https://tilde.zone/@ShyAssassin">
                        <FaMastodon />
                        <Text>&nbsp;Mastodon</Text>
                    </SocialButton>
                </Stack>
            </Center>
        </Layout>
    );
}
