import { Avatar } from "@chakra-ui/react";

export default function ProfilePicture({size = "2xl"}) {
    return (
        <Avatar
            name="Assassin"
            size={size}
            // TODO: figure out why images load slower when using a image from `public/`
            src={"https://pbs.twimg.com/profile_images/1533042206189178885/Qye3arFj_400x400.jpg"}
            loading={"eager"}
        />
    );
}