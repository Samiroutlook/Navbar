import {
  IconButton,
  useColorMode,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const bgColor = useColorModeValue("purple.500", "yellow.300");
  const color = useColorModeValue("white", "black");

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={colorMode}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          fontSize={"lg"}
          right={0}
          aria-label="Toggle Color Mode"
          icon={<Icon as={SwitchIcon} />}
          onClick={toggleColorMode}
          bg={bgColor}
          color={color}
          transition="background-color 1s, color 1s" // Ensures smooth transition on color change
          _hover={{ bg: useColorModeValue("purple.600", "yellow.400") }}
          _focus={{ boxShadow: "none" }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ColorModeSwitcher;
