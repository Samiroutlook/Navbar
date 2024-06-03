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

function Nav() {
  const { colorMode } = useColorMode();
  const hoverColor = colorMode === "light" ? "teal.400" : "teal.300";
  const activeColor = colorMode === "light" ? "teal.400" : "teal.300";

  return (
    <Flex
      position={"fixed"}
      w={"full"}
      shadow="md"
      bg="transparent"
      fontSize="xl"
      h={14}
      alignItems="center"
      justifyContent="space-between"
      px={8}
    >
      <Text fontWeight={700} fontSize="2xl" color={activeColor}>
        Samir
      </Text>
      <Flex
        display={{ base: "none", md: "flex" }}
        w="500px"
        justifyContent="space-between"
        fontWeight={600}
        fontSize="lg"
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
        <Box ml={2} display={{ base: "flex", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem as={NavLink} to="/" _hover={{ color: hoverColor }}>
                Home
              </MenuItem>
              <MenuItem as={NavLink} to="/about" _hover={{ color: hoverColor }}>
                About
              </MenuItem>
              <MenuItem
                as={NavLink}
                to="/projects"
                _hover={{ color: hoverColor }}
              >
                Projects
              </MenuItem>
              <MenuItem
                as={NavLink}
                to="/contact"
                _hover={{ color: hoverColor }}
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

export default Nav;
