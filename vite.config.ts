import { mdsvex } from "mdsvex";
import { defineConfig } from "vite";
import remarkMath from "remark-math";
import adapter from "@sveltejs/adapter-auto";
import rehypeKatex from "rehype-katex-svelte";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
    plugins: [
        sveltekit({
            compilerOptions: {
                // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
                runes: ({ filename }) =>
                    filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
            },

            // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
            // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
            // See https://svelte.dev/docs/kit/adapters for more information about adapters.
            adapter: adapter(),
            extensions: [".svelte", ".svx", ".md"],
            preprocess: [mdsvex({
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex],
                extensions: [".svx", ".md", ".mdx"],
            })],
        }),
    ],
});
