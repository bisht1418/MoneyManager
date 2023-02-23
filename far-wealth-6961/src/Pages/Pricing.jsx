import React from "react";
import { Text, Box } from "@chakra-ui/react";
import Carousel from "../Component/Carousels";
import SolutionBody from "../Component/SolutionBody";
import WithBackgroundImage from "../Component/SolutionHeader";

const Pricing = () => {
  return (
    <Box>
      <WithBackgroundImage
        btn1="Show More"
        btn2="Schedulle a demo"
        para="It's Time SaaS Finance Operations
              Moved Out of Spreadsheets"
        url="https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <Carousel />
      <SolutionBody />
    </Box>
  );
};

export default Pricing;
