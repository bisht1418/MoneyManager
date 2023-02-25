import React from "react";
import { Box, Image } from "@chakra-ui/react";
import WithSpeechBubbles from "../Component/Testimonials";
import TopHead from "../Component/TopHead";
import NewsLetter from "../Component/NewsLetter";
import Getintouch from "../Component/Getintouch";
import SimpleThreeColumns from "../Component/SimpleThreeColumn";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import Blog from "../Component/Blog";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

const feature = [
  {
    icon: <Icon as={FcAssistant} w={10} h={10} />,
    title: "Chargebee Retention",
    text: "Reduce churn and maximize customer lifetime value with Chargebee Retention. Our solution offers flexible pricing plans for companies at every stage. Contact us to find the right pricing options for your business...",
  },
  {
    icon: <Icon as={FcDonate} w={10} h={10} />,
    title: "Chargebee Receivables",
    text: "Recover failed payments and get paid faster with a proactive collections strategy powered by Chargebee Receivables. Connect with our team for personalized Receivables pricing options and expert advice....",
  },
  {
    icon: <Icon as={FcInTransit} w={10} h={10} />,
    title: "Chargebee RevRec",
    text: "Unburden your finance team with automated, compliant revenue recognition and accurately track and report revenue with Chargebee RevRec. Contact us to explore personalized RevRec pricing options....",
  },
];

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

      <Box pb={"100px"}>
        <Blog />
      </Box>

      <Box pb={"100px"} bg={"#F8F8FF"} p={10} mt={-100}>
        <Image
          src="../Images/2.png"
          fallbackSrc="https://via.placeholder.com/150"
        />
      </Box>

      <Box pb={"100px"} p={10} mt={-100}>
        <Image
          src="../Images/3.png"
          fallbackSrc="https://via.placeholder.com/150"
        />
      </Box>

      <Box pb={"100px"} bg={"#F8F8FF"} p={10} mt={-100}>
        <Image
          src="../Images/4.png"
          fallbackSrc="https://via.placeholder.com/150"
        />
      </Box>

      <SimpleThreeColumns feature={feature} />
      <WithSpeechBubbles />
      <NewsLetter />
    </Box>
  );
};

export default Home;
