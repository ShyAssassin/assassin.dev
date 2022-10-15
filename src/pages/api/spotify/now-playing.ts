import type { NextApiRequest, NextApiResponse } from "next";
import { GetNowPlaying } from "../../../lib/spotify";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // get data
    const response = await GetNowPlaying();

    // set content type; we can do this here because res.SetHeader will append new headers and not overwrite them
    res.setHeader("Content-Type", "application/json");

    // return `isPlaying` false to avoid errors if something went wrong while fetching data
    if (response.status == 204 || response.status > 400) {
        return res.status(200).json({ isPlaying: false, response: response.status });
    }

    const song = await response.json();

    // for some reason if a song was paused / stopped spotify will still return the last played song, even if `is_playing` is false.
    // also at times the song object will be empty if no song is playing, so we check for that too.
    // if this happens, return `isPlaying` false
    if (song === null || song.item === null || !song.is_playing) {
        return res.status(200).json({ isPlaying: false }); // NOTE: this response isnt cached everytime this API is called it will make a new request to spotify
    }

    // extract the data we want
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map(_artist => _artist.name).join(", ");
    const album = song.item.album.name;
    const image = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    // if the song is playing; cache the response for 30 seconds
    res.setHeader("Cache-Control", "public, s-maxage=30");

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
