import type { NextApiRequest, NextApiResponse } from "next";
import { GetTopArtists } from "../../../lib/spotify";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // request data
    const response = await GetTopArtists();
    const { items } = await response.json();

    // loop through each element and get data
    const artist = items.slice(0, 10).map(artist => ({
        name: artist.name,
        genres: artist.genres.join(", "),
        image: artist.images[0].url,
        artistUrl: artist.external_urls.spotify
    }));

    //  set headers
    res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200");
    res.setHeader("Content-Type", "application/json");

    // return the data
    return res.status(200).json({ artist });
}
