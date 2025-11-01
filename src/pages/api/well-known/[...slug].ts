import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';

export default async function handler(req: NextRequest) {
    const { pathname } = new URL(req.url);
    const slug = pathname.replace('/api/well-known/', '');

    if (!slug) {
        return new NextResponse("Not Found", { status: 404 });
    }

    try {
        const response = await fetch(new URL(`/.well-known/${slug}`, req.url));

        if (!response.ok) {
            return new NextResponse("Not Found", { status: 404 });
        }

        const data = await response.text();
        return new NextResponse(data, {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        return new NextResponse("Not Found", { status: 404 });
    }
}
