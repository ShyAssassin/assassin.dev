import type { Post } from "$lib/types";
import type { RequestEvent } from "./$types";

function formatDate(dateValue: string): string {
    const match = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(dateValue);
    if (match) {
        const [, year, month, day] = match;
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }

    const parsed = new Date(dateValue);
    return Number.isNaN(parsed.getTime()) ? dateValue : parsed.toISOString().slice(0, 10);
}

export async function GET(request: RequestEvent): Promise<Response> {
    if (request.url.searchParams.size <= 0) {
        const posts: Post[] = [];
        const paths = import.meta.glob("$lib/posts/*.md", { eager: true });

        for (const path in paths) {
            const file = paths[path] as Record<string, unknown>;
            const metadata = file.metadata as Omit<Post, "filePath">;

            posts.push({
                filePath: path,
                slug: metadata.slug,
                title: metadata.title,
                tags: metadata.tags || [],
                published: metadata.published,
                description: metadata.description,
                publishedDate: formatDate(metadata.publishedDate),
            });
        }

        return new Response(JSON.stringify(posts));
    } else {
        let posts: Post[] = await request.fetch("/api/posts").then(res => res.json());
        if (request.url.searchParams.has("slug")) {
            const slug = request.url.searchParams.get("slug");
            posts = posts.filter(post => post.slug === slug);
        }
        if (request.url.searchParams.has("tag")) {
            const tags = request.url.searchParams.get("tag")?.split(",") || [];
            posts = posts.filter(post => tags.every(tag => post.tags.includes(tag)));
        }

        return new Response(JSON.stringify(posts));
    }
}
