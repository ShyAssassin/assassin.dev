import Head from "next/head";
import { SimpleGrid } from "@chakra-ui/react";
import Layout from "@components/layouts/layout";
import ProjectCard from "@components/ProjectCard";

// for some reason `next/image` doesnt work if provided a URL
import placholder from "@public/images/projects/placholder.png";
import assassin_dev from "@public/images/projects/assassin-dev.png";
import Monarch from "@public/images/projects/monarch.png";

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>Assassin | Projects</title>
                <meta name="description" content="A list of projects i have worked on" />
            </Head>
            <SimpleGrid columns={[1, 2]} spacing={5}>
                <ProjectCard
                    title={"Assassin.dev"}
                    image={assassin_dev}
                    href={"https://github.com/Assassinsorrow/assassin.dev"}
                    description={"My personal website and portfolio"}
                />
                <ProjectCard
                    title={"Monarch"}
                    image={Monarch}
                    href={"https://github.com/Assassinsorrow/Monarch"}
                    description={"Monarch is my custom game engine inspired heavily by valve's source engine."}
                />
            </SimpleGrid>
        </Layout>
    );
}
