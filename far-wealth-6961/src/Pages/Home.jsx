import React from "react";
import { Box, Image } from "@chakra-ui/react";
import WithSpeechBubbles from "../Component/Testimonials";
import TopHead from "../Component/TopHead";
import NewsLetter from "../Component/NewsLetter";
import Getintouch from "../Component/Getintouch";

const Home = () => {
  return (
    <Box>
      <TopHead />
      <Box bg={"#F8F8FF"} p={10} mt={-100}>
        <Image
          src="../Images/1.png"
          fallbackSrc="https://via.placeholder.com/150"
        />
      </Box>

      <Box bg={"#F8F8FF"} p={10} mt={-100}>
        <Image
          src="../Images/2.png"
          fallbackSrc="https://via.placeholder.com/150"
        />
      </Box>

      <Box bg={"#F8F8FF"} p={10} mt={-100}>
        <Image
          src="../Images/3.png"
          fallbackSrc="https://via.placeholder.com/150"
        />
      </Box>

      <Box bg={"#F8F8FF"} p={10} mt={-100}>
        <Image
          src="../Images/4.png"
          fallbackSrc="https://via.placeholder.com/150"
        />
      </Box>
      <WithSpeechBubbles />
      <NewsLetter />
      {/* <Getintouch /> */}
    </Box>
  );
};

export default Home;
