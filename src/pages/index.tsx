import Head from "next/head";
import Layout from "@components/layouts/layout";
// import Technologies from "@components/Technologies";
import NowPlaying from "@components/NowPlaying";
import { Box, Heading, Text } from "@chakra-ui/react";
import ProfilePicture from "@components/ProfilePicture";

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
                        {/* weird fucking bug, fontsize is too big on firefox on unix based systems */}
                        {/* this is hopefully a temporary fix */}
                        <Text fontSize={18} style={{ marginLeft: 25 }} noOfLines={1}>
                            Software Engineer ( Streamer / Developer / Designer )
                        </Text>
                        {/* <p style={{ marginLeft: 50 }}>Embeded Development engineer at Valve</p> */} {/* one day :') */}
                        <NowPlaying ml={50} />
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: -4 }} ml={{ md: 6 }} textAlign="center">
                        <ProfilePicture />
                    </Box>
                </Box>
                {/* Mobile specific */}
                <Box flexGrow={1} display={{ base: "inline-block", md: "none" }}>
                    <Box display={{ base: "flex" }}>
                        <Box flexGrow={1}>
                            <Heading as="h2" variant="page-title">
                                [Assassin]
                            </Heading>
                            <Text noOfLines={1} fontSize={[16, 20]} style={{ marginLeft: 15 }}>
                                Software Engineer ( Streamer / Developer / Designer )
                            </Text>
                            {/* <p style={{ marginLeft: 30 }}>Embeded Development engineer at Valve</p> */} {/* one day :') */}
                            <NowPlaying ml={30} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* <Technologies /> */}
        </Layout>
    );
}
