import type { Post } from "$lib/types";
import type { RequestEvent } from "./$types";

export async function GET(request: RequestEvent): Promise<Response> {
    const posts: Post[] = await request.fetch("/api/posts").then(res => res.json());

    return new Response(`
        <?xml version="1.0" encoding="UTF-8"?>
        <rss version="2.0">
            <channel>
                <language>en-us</language>
                <generator>SvelteKit</generator>
                <link>https://assassin.dev</link>
                <title>The ShyAssassin Blog</title>
                <description>Assassin's personal blog</description>
                <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
                ${posts.filter(post => post.published === true).map(post => `
                    <item>
                        ${post.tags.map(tag => `
                            <category>${tag}</category>
                        `).join("").trim() || "".trim()}

                        <title>${post.title}</title>
                        <description>${post.description}</description>
                        <link>https://assassin.dev/blog/${post.slug}</link>
                        <pubDate>${new Date(post.publishedDate).toUTCString()}</pubDate>
                        <guid>ShyAssassin-${new Date(post.publishedDate).valueOf()}ms</guid>
                    </item>
                `).join("")}
            </channel>
        </rss>`.split("\n").map(line => line.trim()).filter(l => l.length > 0).join("\n"),
    { headers: { "Content-Type": "application/rss+xml; charset=UTF-8" } },
    );
}
