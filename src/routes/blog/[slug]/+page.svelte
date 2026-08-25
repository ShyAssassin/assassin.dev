<script lang="ts">
    import mermaid from "mermaid";
    import { onMount } from "svelte";
    import { page } from "$app/state";
    import type { PageData } from "./$types";

    const host = page.url.origin;
    mermaid.initialize({ startOnLoad: false });
    let { data }: { data: PageData } = $props();

    onMount(async () => {
        const elements = document.querySelectorAll("pre code.language-mermaid");
        for (const element of elements as NodeListOf<HTMLElement>) {
            const graph = element.textContent;
            const id = `mermaid-${crypto.randomUUID()}`;
            const originalParentElement = element.parentElement;
            const originalChildren = new Set(document.body.children);
            if ((element.parentElement || element.innerHTML) && graph?.trim()) {
                try {
                    const render = await mermaid.render(id, graph);
                    element.parentElement!.innerHTML = render.svg;
                } catch (err) {
                    console.error("Mermaid render error:", err);

                    // Mermaid leaves stray SVGs in the body on errors
                    // So we just move them into place where they belong
                    for (const node of Array.from(document.body.children)) {
                        if (!originalChildren.has(node)) {
                            originalParentElement!.innerHTML = "";
                            originalParentElement!.appendChild(node);
                        }
                    }
                }
            }
        }
    });
</script>

<svelte:head>
    <title>{data.post.title}</title>
    <meta property="og:type" content="article" />
    <base href={`${host}/blog/${data.post.slug}/`} />
    <meta property="og:title" content={data.post.title} />
    <meta property="og:description" content={data.post.description} />
    <meta property="og:image" content={data.post.bannerImage || "/favicon.svg"} />
    <meta property="og:url" content={`https://assassin.dev/blog/${data.post.slug}`} />

    <link rel="stylesheet"
        crossorigin="anonymous"
        href="https://cdn.jsdelivr.net/npm/katex@0.18.4/dist/katex.min.css"
        integrity="sha384-u1zONI5gPXUx0UKI62c75/zww972y0v2rSK5ZYlVdS6xEuWDeZWUI66v6t1gvlXJ"
    />
</svelte:head>

<article>
    <data.content />
</article>
