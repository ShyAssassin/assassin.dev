import Logo from "@components/Logo";
import NextLink from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeToggleButton from "@components/ThemeToggleButton";
import { Heading, Flex, MenuList, Menu, MenuItem, MenuButton } from "@chakra-ui/react";
import { Box, Container, Stack, Link, IconButton } from "@chakra-ui/react";
import NavBarLink from "@components/NavBarLink";

export default function NavBar({ router }) {
    return (
        <Box w="100%">
            <Container display={"flex"} p={2} maxW={"3xl"} justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"}>
                {/* logo */}
                <Flex align="center" cursor={"pointer"} mr={0}>
                    <Heading as="h1" size="md" letterSpacing={"wide"}>
                        <Logo />
                    </Heading>
                </Flex>
                {/* desktop links */}
                <Stack
                    spacing={0}
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    mt={{ base: 4, md: 0 }}
                    alignItems="center"
                    flexGrow={1}
                    as={"nav"}>
                    <NavBarLink path={router} href={"/projects"}>
                        Projects
                    </NavBarLink>
                    {/* <NavBarLink path={router} href={"/blog"}>
                        Blog
                    </NavBarLink> */}
                    <NavBarLink path={router} href={"/socials"}>
                        Socials
                    </NavBarLink>
                    <NavBarLink path={router} href={"/setup"}>
                        Setup
                    </NavBarLink>
                </Stack>
                {/* items aligned to right of screen */}
                {/* @ts-ignore */} {/* for some reason align isnt a type? */}
                <Box flex={1} align={"right"}>
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
                        {/* hamburger menu */}
                        <Menu isLazy id="navbar-menu">
                            <MenuButton as={IconButton} icon={<GiHamburgerMenu />} variant="outline" aria-label="Options" />
                            <MenuList>
                                <NextLink href={"/"} scroll={false}>
                                    <MenuItem as={Link}>Home</MenuItem>
                                </NextLink>
                                <NextLink href={"/projects"} scroll={false}>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>
                                {/* <NextLink href={"/blog"} scroll={false}>
                                    <MenuItem as={Link}>Blog</MenuItem>
                                </NextLink> */}
                                <NextLink href={"/socials"} scroll={false}>
                                    <MenuItem as={Link}>Socials</MenuItem>
                                </NextLink>
                                <NextLink href={"/setup"} scroll={false}>
                                    <MenuItem as={Link}>Setup</MenuItem>
                                </NextLink>
                                <NextLink href={"/spotify"} scroll={false}>
                                    <MenuItem as={Link}>Spotify</MenuItem>
                                </NextLink>
                                <MenuItem as={"a"} href="https://github.com/ShyAssassin/assassin.dev">
                                    View Source
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
