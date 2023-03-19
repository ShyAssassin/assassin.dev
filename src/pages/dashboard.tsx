import Head from "next/head";
import Layout from "@components/layouts/layout";

export default function Dashboard() {
    return (
        <Layout>
            <Head>
                <title>Assassin | Dashboard</title>
                <meta name="description" content="A dashboard containing some statics" />
            </Head>
        </Layout>
    );
}
