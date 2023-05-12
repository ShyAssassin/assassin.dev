const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const DEVICES_ENDPOINT = `https://api.spotify.com/v1/me/player/devices`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const BASIC = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

// refresh access token with refresh_token
async function GetAccessToken() {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${BASIC}`,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: REFRESH_TOKEN
        })
    });
    // return updated access token
    return response.json();
}

export async function GetRefreshToken() {}

// get current playing track
export async function GetNowPlaying() {
    const { access_token } = await GetAccessToken();
    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
}

export async function GetDevices() {
    const { access_token } = await GetAccessToken();
    return fetch(DEVICES_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
}

// get top tracks
export async function GetTopTracks() {
    const { access_token } = await GetAccessToken();
    return fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
}

// get top artists
export async function GetTopArtists() {
    const { access_token } = await GetAccessToken();
    return fetch(TOP_ARTISTS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
}
