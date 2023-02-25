import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { Image, Stack } from "@chakra-ui/react";
import ArticleList from "../Component/Blog";
import BlogTitle from "../Component/BlogTitle";

const Resources = () => {
  return (
    <Box>
      <Stack direction="row">
        <Image src="../Images/18.png" alt="Dan Abramov" />
      </Stack>

      <Box>
        <ArticleList />
      </Box>

      <Box>
        <BlogTitle />
      </Box>

      <Stack direction="row">
        <Image src="../Images/17.png" alt="Dan Abramov" />
      </Stack>
    </Box>
  );
};

export default Resources;
