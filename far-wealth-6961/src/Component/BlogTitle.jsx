import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";

const BlogTitle = () => {
  return (
    <Box>
      <Container maxW={"7xl"} p="12">
        <SimpleGrid columns={3} spacing={10}></SimpleGrid>
        <Heading as="h2" marginTop="5">
          Latest articles
        </Heading>
        <Divider marginTop="5" />
      </Container>

      <SimpleGrid minChildWidth="auto" row={3}></SimpleGrid>
    </Box>
  );
};

export default BlogTitle;
