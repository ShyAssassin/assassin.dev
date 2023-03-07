import { Avatar } from "@chakra-ui/react";

export default function ProfilePicture({size = "2xl"}) {
    return (
        <Avatar
            name="Assassin"
            size={size}
            // TODO: figure out why images load slower when using a image from `public/`
            src={"https://pbs.twimg.com/profile_images/1602048506633588737/5fw-BC3w_400x400.jpg"}
            loading={"eager"}
        />
    );
}