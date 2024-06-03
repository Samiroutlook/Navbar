// src/Components/Navbar/Nav.jsx
import React from "react";
import { Flex, Text, Link as ChakraLink, useColorMode } from "@chakra-ui/react";
import ColorModeSwitcher from "../../ColorModeSwitcher";
import { NavLink } from "react-router-dom";

function Nav() {
  const { colorMode } = useColorMode();
  const hoverColor = colorMode === "light" ? "teal.400" : "teal.300";
  const activeColor = colorMode === "light" ? "teal.400" : "teal.300";

  return (
    <Flex
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
      <ColorModeSwitcher />
    </Flex>
  );
}

export default Nav;
