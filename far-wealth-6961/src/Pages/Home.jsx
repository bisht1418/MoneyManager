import React from "react";
import { Box } from "@chakra-ui/react";
import WithSpeechBubbles from "../Component/Testimonials";
import TopHead from "../Component/TopHead";

const Home = () => {
  return (
    <Box>
      <TopHead />
      <WithSpeechBubbles />
    </Box>
  );
};

export default Home;
