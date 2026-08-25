import type { Post } from "$lib/types";
import type { RequestEvent } from "./$types";

const assets = import.meta.glob("$lib/posts/**/*", { eager: true, query: "?url&no-inline" }) as Record<string, { default: string }>;
export async function GET(request: RequestEvent): Promise<Response> {
    const post: Post = (await request.fetch(`/api/posts?slug=${request.params.slug}`).then(res => res.json()))[0];
    if (!post?.filePath) return new Response("Post not found, blogpost assets may be missing", { status: 404 });
    // Mostly safe since assets are only files in the $lib/posts directory, hopefully no one is being stinky
    const filePath = post.filePath.replace(/[^/]+$/, request.params.assets.replace(/\.\./g, ""));
    // Dev and prod have different filepaths, so we need to find the correct *new* path
    const key = Object.keys(assets).find(key => key.endsWith(filePath));

    if (key) {
        const data = await request.fetch(assets[key].default);
        return new Response(data.body, { headers: data.headers });
    }

    return new Response("Asset not found", { status: 404 });
}
