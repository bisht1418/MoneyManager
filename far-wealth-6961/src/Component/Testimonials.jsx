import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { AvatarBadge, AvatarGroup } from "@chakra-ui/react";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
                With 360-degree visibility into customers and subscriptions,
                Userlane is able to forecast their cashflow by tracking pending
                and paid invoices, as well as upcoming invoices, on Chargebee.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"https://bit.ly/prosper-baba"}
              name={"Jane "}
              title={"Assistant at Wipro Corporation"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Before Chargebee</TestimonialHeading>
              <TestimonialText>
                Userlane could not get a holistic view of the customers in terms
                of subscriptions, plans, and billing dates, leading to the team
                spending 5-6 days closing their monthly financials.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"https://bit.ly/tioluwani-kolawole"}
              name={"Jarnee Edulog"}
              title={"CEO at Money Manager"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
                With flexible efficient billing schedules and the ability to add
                unbilled charges, the finance team at Userlane was able to spend
                time on more strategic tasks.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"src='https://bit.ly/dan-abramov'"}
              name={"Someshwar Baba"}
              title={"Manager at Google "}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
