import type { NextApiRequest, NextApiResponse } from "next";
import { GetTopTracks } from "@lib/spotify";

export const runtime = 'edge';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // request data
    const response = await GetTopTracks();
    const { items } = await response.json();

    // loop through each element and get data
    const tracks = items.slice(0, 10).map(track => ({
        title: track.name,
        artist: track.artists.map(_artist => _artist.name).join(", "),
        songUrl: track.external_urls.spotify,
        image: track.album.images[0].url
    }));

    //  set headers
    res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200");
    res.setHeader("Content-Type", "application/json");

    // return the data
    return res.status(200).json({ tracks });
}
