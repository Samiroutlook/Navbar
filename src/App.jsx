import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
import theme from "./theme";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
