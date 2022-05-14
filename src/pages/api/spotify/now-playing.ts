import type { NextApiRequest, NextApiResponse } from "next";
import { GetNowPlaying } from "../../../lib/spotify";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // get data
    const response = await GetNowPlaying();

    // return Playing false if something goes wrong
    if (response.status == 204 || response.status > 400) {
        return res.status(200).json({ isPlaying: false, response: response.status });
    }

    const song = await response.json();

    // return Playing false if song is not playing
    if (song.item === null) {
        return res.status(200).json({ isPlaying: false });
    }

    // extract the data we want
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map(_artist => _artist.name).join(", ");
    const album = song.item.album.name;
    const image = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    // set headers
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=30");

    // return the data
    return res.status(200).json({
        isPlaying,
        title,
        artist,
        album,
        image,
        songUrl
    });
}
