import type { Post } from "$lib/types";
import type { PageLoad } from "./$types";

export async function load(event: Parameters<PageLoad>[0]) {
    const post: Post = (await event.fetch(`/api/posts?slug=${event.params.slug}`).then(res => res.json()))[0];
    const postData = (await import(post.filePath)).default || "Huh congrats, you borked something :p";

    return {
        post: post,
        content: postData,
    };
}
