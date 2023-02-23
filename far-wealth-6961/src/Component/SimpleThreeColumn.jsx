import React from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Flex,
  Button,
  Heading,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        mb={1}
      >
        {icon}
      </Flex>

      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
      <Button colorScheme="blue">Talk to us!</Button>
    </Stack>
  );
};

const SimpleThreeColumns = ({ feature }) => {
  console.log("feature", feature.icon);
  return (
    <Box p={4}>
      <Heading p={10}>
        Solutions for every step in the recurring revenue lifecycle
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {feature?.map((ele) => (
          <>
            <Feature title={ele.title} text={ele.text} icon={ele.icon} />
          </>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SimpleThreeColumns;
