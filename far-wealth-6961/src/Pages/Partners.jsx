import React from "react";
import { Text, Box } from "@chakra-ui/react";
import Multistep from "../Component/Forms";
import Simple from "../Component/Details";

import { Image, Stack } from "@chakra-ui/react";

const Partners = () => {
  return (
    <Box>
      <Simple />
      <Stack direction="row">
        <Image src="../Images/16.png" alt="Dan Abramov" />
      </Stack>

      <Multistep />
    </Box>
  );
};

export default Partners;
