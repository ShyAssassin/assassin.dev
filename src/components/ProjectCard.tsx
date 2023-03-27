import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";

export default function ProjectCard({ title, image, href, description }) {
    return (
        <Box w="100%" textAlign={"center"}>
            <LinkBox cursor="pointer">
                <LinkOverlay href={href}>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>
                        {title}
                    </Text>
                    <Image style={{ borderRadius: "12px" }} src={image} alt={title} placeholder="blur" />
                    <Text mt={-1} fontSize={"15"} noOfLines={2}>
                        {description}
                    </Text>
                </LinkOverlay>
            </LinkBox>
        </Box>
    );
}
