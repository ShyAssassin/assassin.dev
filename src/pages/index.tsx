import Head from "next/head";
import Layout from "@components/layouts/layout";
import AboutMe from "@components/AboutMe";
import Technologies from "@components/Technologies";
import NowPlaying from "@components/NowPlaying";
import { Box, Heading, Text } from "@chakra-ui/react";
import ProfilePicture from "@components/ProfilePicture";
import dynamic from "next/dynamic";
import ModelLoader from "@components/ModelLoader";

const Model = dynamic(() => import("@components/Model"), {
    ssr: false,
    loading: () => <ModelLoader />
});

export default function Index() {
    return (
        <Layout>
            <Head>
                <title>Assassin | Developer</title>
                <meta name="description" content="Assassin's Personal Website and portfolio" />
            </Head>
            <Model />
            {/* Intro */}
            {/* TODO: Maybe make this a component? */}
            <Box display={"flex"}>
                {/* Desktop specific */}
                <Box flexGrow={1} display={{ base: "none", md: "flex" }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            [Assassin]
                        </Heading>
                        {/* weird fucking bug, fontsize is too big on firefox on unix based systems */}
                        <Text fontSize={19} marginLeft={25} noOfLines={1}>
                            Software Engineer ( Streamer / Developer / Designer )
                        </Text>
                        <NowPlaying ml={50} />
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 2 }} textAlign="center">
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
                            <Text noOfLines={1} fontSize={[15, 18]} marginLeft={15}>
                                Software Engineer ( Streamer / Developer / Designer )
                            </Text>
                            <NowPlaying ml={30} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Technologies />
            <AboutMe />
        </Layout>
    );
}
