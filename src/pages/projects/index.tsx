import Head from "next/head";
import { SimpleGrid } from "@chakra-ui/react";
import Layout from "@components/layouts/layout";
import ProjectCard from "@components/ProjectCard";

// for some reason `next/image` doesnt work if provided a URL
import placholder from "@public/images/projects/placeholder.png";
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
                    title={"assassin.dev"}
                    image={assassin_dev}
                    href={"https://github.com/ShyAssassin/assassin.dev"}
                    description={"My personal website and portfolio (The site you are on right now)"}
                />
                <ProjectCard
                    title={"ETVR Tracking Backend"}
                    image={placholder}
                    href={"https://github.com/ShyAssassin/ETVR-Tracking-Backend"}
                    description={"The eye tracking backend for the EyeTrackVR project"}
                />
                <ProjectCard
                    title={"PyMake"}
                    image={placholder}
                    href={"https://github.com/ShyAssassin/PyMake"}
                    description={"A simple tool to add make-like functionality to Python projects"}
                />
                <ProjectCard
                    title={"Monarch"}
                    image={Monarch}
                    href={"https://github.com/ShyAssassin/Monarch"}
                    description={"Monarch is my custom game engine inspired heavily by valve's source engine"}
                />
            </SimpleGrid>
        </Layout>
    );
}
