import { mdsvex } from "mdsvex";
import type { VFile } from "vfile";
import { defineConfig } from "vite";
import remarkMath from "remark-math";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import type { Root, Element } from "hast";
import adapter from "@sveltejs/adapter-auto";
import rehypeKatex from "rehype-katex-svelte";
import { sveltekit } from "@sveltejs/kit/vite";

const relativeImages: Plugin<[], Root> = () => {
    return (tree: Root, file: VFile) => {
        const slug = (file.data as { fm?: { slug?: string } }).fm?.slug;
        if (!slug) throw new Error("No slug found in frontmatter for file: " + file.path);

        visit(tree, "element", (node: Element) => {
            if (node.tagName !== "img") return;

            const src = node.properties?.src;
            if (typeof src !== "string") return;
            if (/^(https?:)?\/\//.test(src) || src.startsWith("/")) return;

            node.properties.src = `/blog/${slug}/${src}`;
        });
    };
};

export default defineConfig({
    plugins: [
        sveltekit({
            compilerOptions: {
                // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
                runes: ({ filename }) =>
                    filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
            },

            extensions: [".svelte", ".svx", ".md", ".mdx"],
            // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
            // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
            // See https://svelte.dev/docs/kit/adapters for more information about adapters.
            adapter: adapter(),
            preprocess: [mdsvex({
                remarkPlugins: [remarkMath],
                extensions: [".svx", ".md", ".mdx"],
                // @ts-expect-error: Type mismatches :)
                rehypePlugins: [rehypeKatex, relativeImages],
            })],
        }),
    ],
});
