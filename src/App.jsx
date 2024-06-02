import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Nav from "./Components/Navbar/Nav";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Nav />
    </ChakraProvider>
  );
}

export default App;
