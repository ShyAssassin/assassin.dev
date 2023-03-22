import { Avatar } from "@chakra-ui/react";

export default function ProfilePicture({ size = "2xl" }) {
    return (
        <Avatar
            name="Assassin"
            size={size}
            src={"/images/profile-picture.png"}
            loading={"eager"}
        />
    );
}
