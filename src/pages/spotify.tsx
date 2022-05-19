import Layout from "../components/layouts/layout";

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const authScope: string[] = [
    "user-read-currently-playing", // Read the user's currently playing track
    "user-read-playback-position", // Read the user's position in the currently playing track
    "user-read-playback-state", // Read the user's playback state
    "user-read-recently-played", // Read the user's recently played tracks
    "user-modify-playback-state", // Control playback of Spotify, Add songs to queue, skip tracks, etc.
    "user-top-read", // Read the user's top artists and tracks
    "user-follow-read" // Read the user's followed artists and users
];
const spotifyUrl: string = "https://accounts.spotify.com/authorize";

export default function Spotify() {
    return (
        <Layout>
            <div>Hello World, Spotify</div>
        </Layout>
    );
}
