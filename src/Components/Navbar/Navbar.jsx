import React from "react";
import {
  Flex,
  Text,
  Link as ChakraLink,
  useColorMode,
  IconButton,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ColorModeSwitcher from "../../ColorModeSwitcher";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { colorMode } = useColorMode();
  const text = colorMode === "light" ? "black" : "white";
  const hoverColor = colorMode === "light" ? "teal.400" : "teal.300";
  const activeColor = colorMode === "light" ? "teal.500" : "teal.300";
  const navbg = colorMode === "light" ? "gray.50" : "gray.800";

  return (
    <Flex
      position={"fixed"}
      w={"full"}
      bg={navbg}
      backdropFilter={blur}
      fontSize="xl"
      h={14}
      alignItems="center"
      justifyContent="space-between"
      px={["2", "8"]}
      shadow={"md"}
    >
      <Text
        fontFamily={"Roboto Mono "}
        letterSpacing={"tight"}
        fontWeight={700}
        fontSize={"2xl"}
        color={text}
      >
        Samir
      </Text>
      <Flex
        display={{ base: "none", lg: "flex" }}
        justifyContent={"space-between"}
        w="500px"
        fontWeight={500}
        fontSize="lg"
        mx={"auto"}
      >
        <ChakraLink
          as={NavLink}
          to="/"
          exact="true"
          textDecoration="none"
          _hover={{ color: hoverColor }}
          _activeLink={{ color: activeColor }}
        >
          Home
        </ChakraLink>
        <ChakraLink
          as={NavLink}
          to="/about"
          exact="true"
          textDecoration="none"
          _hover={{ color: hoverColor }}
          _activeLink={{ color: activeColor }}
        >
          About
        </ChakraLink>
        <ChakraLink
          as={NavLink}
          to="/projects"
          exact="true"
          textDecoration="none"
          _hover={{ color: hoverColor }}
          _activeLink={{ color: activeColor }}
        >
          Projects
        </ChakraLink>
        <ChakraLink
          as={NavLink}
          to="/contact"
          exact="true"
          textDecoration="none"
          _hover={{ color: hoverColor }}
          _activeLink={{ color: activeColor }}
        >
          Contact
        </ChakraLink>
      </Flex>
      <Flex alignItems="center">
        <ColorModeSwitcher />
        <Box ml={2} display={{ base: "flex", lg: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem
                as={NavLink}
                to="/"
                _hover={{ color: hoverColor }}
                _activeLink={{ color: activeColor }}
                fontSize={"md"}
              >
                Home
              </MenuItem>
              <MenuItem
                as={NavLink}
                to="/about"
                _hover={{ color: hoverColor }}
                _activeLink={{ color: activeColor }}
                fontSize={"md"}
              >
                About
              </MenuItem>
              <MenuItem
                as={NavLink}
                to="/projects"
                _hover={{ color: hoverColor }}
                _activeLink={{ color: activeColor }}
                fontSize={"md"}
              >
                Projects
              </MenuItem>
              <MenuItem
                as={NavLink}
                to="/contact"
                _hover={{ color: hoverColor }}
                _activeLink={{ color: activeColor }}
                fontSize={"md"}
              >
                Contact
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Navbar;
