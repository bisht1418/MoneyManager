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
  VStack,
} from "@chakra-ui/react";

const ArticleList = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1"> Expand Revenue and Curb Churn</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          {/* <BlogTags tags={["Engineering", "Product"]} /> */}
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              Unearth Opportunities with Analytics
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Growing your SaaS business requires you to make data-driven
            decisions. A complete view of your subscription analytics helps you
            identify historical patterns and predict the upcoming trends.
            Especially in the fast-paced SaaS market, yesterday’s truths may not
            be applicable for tomorrow.
          </Text>
          {/* <BlogAuthor name="John Doe" date={new Date("2021-04-06T19:01:27Z")} /> */}
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        Latest articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box h={"100%"} w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  transform="scale(1.0)"
                  src={"../Images/19.png"}
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  height={"100%"}
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            {/* <BlogTags tags={["Engineering", "Product"]} marginTop="3" /> */}
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Explore New Markets Globally
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              SaaS is built for global markets. Cloud makes it easy for your
              product to be accessed from anywhere in the world. Expanding your
              presence globally can open doors to new markets and more revenue
              growth, which is difficult to replicate if you restrict your SaaS
              operations solely within one country.
            </Text>
            {/* <BlogAuthor
              name="John Doe"
              date={new Date("2021-04-06T19:01:27Z")}
            /> */}
          </Box>
        </WrapItem>
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box h={"100%"} w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  transform="scale(1.0)"
                  src={"../Images/20.png"}
                  alt="some text"
                  objectFit="contain"
                  width="auto"
                  height="auto"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            {/* <BlogTags tags={["Engineering", "Product"]} marginTop="3" /> */}
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Experiment & Iterate Pricing On the Go
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              On the hypergrowth track, maximizing revenue is a priority.
              Pricing is one of the most important growth levers for maximizing
              revenue and ensuring your customers get the most value from your
              product.
            </Text>
            {/* <BlogAuthor
              name="John Doe"
              date={new Date("2021-04-06T19:01:27Z")}
            /> */}
          </Box>
        </WrapItem>
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box h={"100%"} w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  transform="scale(1.0)"
                  src={"../Images/23.png"}
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  height={"100%"}
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            {/* <BlogTags tags={["Engineering", "Product"]} marginTop="3" /> */}
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Some Revenue title
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              As the world transitions to the cloud, SaaS, which makes up the
              largest market segment, is forecast to grow to $117.7 billion in
              2021. Thanks to a combination of rapid digital transformation and
              an acceleration in cloud adoption across industries, SaaS
              hypergrowth has become the new normal.
            </Text>
            {/* <BlogAuthor
              name="John Doe"
              date={new Date("2021-04-06T19:01:27Z")}
            /> */}
          </Box>
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export default ArticleList;
