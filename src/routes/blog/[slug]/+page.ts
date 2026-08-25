import type { Post } from "$lib/types";
import { dev } from "$app/environment";
import type { PageLoad } from "./$types";

const modules = import.meta.glob("$lib/posts/**/*.md");
export async function load(event: Parameters<PageLoad>[0]) {
    let postData: unknown = "Hey this shouldn't be visible, something went very extremely wrong here :p";
    const post: Post = (await event.fetch(`/api/posts?slug=${event.params.slug}`).then(res => res.json()))[0];
    if (dev) postData = (await import(/* @vite-ignore */ post.filePath)).default || "you borked something badly :)";
    else postData = modules[post.filePath] ? (await modules[post.filePath]() as { default: unknown }).default : postData;

    return {
        // eslint-disable-next-line
        content: postData as any,
        post: post as Post,
    };
}
