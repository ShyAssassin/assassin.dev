import useSWR from "swr";
import fetcher from "@lib/fetcher";
import { Spotify_NowPlaying } from "@lib/types";
import { Box as Box, HStack } from "@chakra-ui/react";
import SpotifyLogo from "@public/icons/spotify.svg";

export default function NowPlaying({ ml = 0 }) {
    // regex to replace everything within the brackets of a song title
    // also excludes the dash and everything after it
    const regex = /\s*\(.*?\)|\s*-.*$/g;
    // get the current songs data
    const { data } = useSWR<Spotify_NowPlaying>("/api/spotify/now-playing", fetcher, { refreshInterval: 60000 }); // refresh every minute
    // asign the data if null use default values
    const title = data?.title?.replace(regex, "") ?? "Not Playing";
    const artist = data?.artist ?? "Spotify";
    const songUrl = data?.songUrl;
    return (
        <Box maxW={"md"} w={"full"} style={{ marginLeft: ml }}>
            <a href={songUrl} target="_blank" rel="noopener noreferrer">
                <HStack spacing={1}>
                    <SpotifyLogo width={16} height={16} />
                    <Box fontWeight={"bold"} fontSize={"13"} noOfLines={1}>
                        {title}
                    </Box>
                    <Box fontWeight={"extrabold"} fontSize={"17"}>
                        {" - "}
                    </Box>
                    <Box fontWeight={"normal"} fontSize={"12"} noOfLines={1}>
                        {artist}
                    </Box>
                </HStack>
            </a>
        </Box>
    );
}
