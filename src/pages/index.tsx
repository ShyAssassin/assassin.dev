import Head from "next/head";
import Layout from "../components/layouts/layout";
import NowPlaying from "../components/NowPlaying";

export default function Index() {
    return (
        <Layout>
            <Head>
                <title>Assassin | Developer</title>
                <meta name="description" content="" />
            </Head>
            <NowPlaying />
        </Layout>
    );
}
