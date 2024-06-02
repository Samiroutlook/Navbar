// src/Components/Navbar/Nav.jsx
import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import ColorModeSwitcher from "../../ColorModeSwitcher";

function Nav() {
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
      <Text fontWeight={700} fontSize="2xl" textColor="teal.300">
        Samir
      </Text>
      <Flex
        w="500px"
        justifyContent="space-between"
        fontWeight={600}
        fontSize="lg"
      >
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </Flex>
      <ColorModeSwitcher />
    </Flex>
  );
}

export default Nav;
