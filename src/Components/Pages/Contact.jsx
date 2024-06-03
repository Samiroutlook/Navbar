import React from "react";
import { Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Grid
        placeItems={"center"}
        h={"100vh"}
        fontSize={["2xl", "3xl", "3xl"]}
        fontWeight={600}
      >
        Hello, I am Contact
      </Grid>
    </motion.div>
  );
}

export default Contact;
