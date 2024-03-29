import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay, Center } from "@chakra-ui/react";

export default function ProjectCard({ title, image, href, description }) {
    return (
        <Box w="100%" textAlign={"center"}>
            <LinkBox cursor="pointer">
                <LinkOverlay href={href}>
                    <Text fontSize={"2xl"} fontWeight={"bold"} noOfLines={1}>
                        {title}
                    </Text>
                    <Center>
                        <Box position={"relative"} width={310} height={175}>
                            <Image style={{ borderRadius: "12px" }} src={image} alt={title} placeholder="blur" fill loading="lazy" />
                        </Box>
                    </Center>
                    <Text mt={-1} fontSize={"15"} noOfLines={2}>
                        {description}
                    </Text>
                </LinkOverlay>
            </LinkBox>
        </Box>
    );
}
