import Head from "next/head";
import Layout from "../components/layouts/layout";
import NowPlaying from "../components/NowPlaying";
import { Box, Heading } from "@chakra-ui/react";
import ProfilePicture from "../components/ProfilePicture";

export default function Index() {
    return (
        <Layout>
            <Head>
                <title>Assassin | Developer</title>
                <meta name="description" content="" />
            </Head>
            {/* Intro */}
            <Box display={"flex"}>
                {/* Desktop specific */}
                <Box flexGrow={1} display={{ base: "none", md: "flex" }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            [Assassin]
                        </Heading>
                        <p style={{marginLeft: 25}}>Software Engineer ( Artist / Developer / Designer )</p>
                        <NowPlaying ml={50}/>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: -4 }} ml={{ md: 6 }} textAlign="center">
                        <ProfilePicture />
                    </Box>
                </Box>
                {/* Mobile specific */}
                <Box flexGrow={1} display={{ base: "inline-block", md: "none" }}>
                    <Box flexShrink={0} ml={"4"} textAlign="left">
                        <ProfilePicture size="xl"/>
                    </Box>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            [Assassin]
                        </Heading>
                        <NowPlaying ml={8}/>
                        <p style={{marginLeft: 22}}>Software Engineer ( Artist / Developer / Designer )</p>
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
}
