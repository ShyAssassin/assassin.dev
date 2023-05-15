import { Box, Heading, Text } from "@chakra-ui/react";

export default function AboutMe(){
    return(
        <Box>
            <Heading as="h2" textDecoration={"underline"}>
                About Me
            </Heading>
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Text fontSize={18} maxW={"38rem"}>
                    {`
                    Hello! My name is <redacted> but i go by [Assassin] or ShyAssassin Online.
                    I am a Software Engineer based in South Africa with a passion for game development, VR and computer graphics.
                    `}
                </Text>
            </Box>
        </Box>
    )
}