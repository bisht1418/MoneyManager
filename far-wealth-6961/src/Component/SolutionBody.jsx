import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Link,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

function PriceWrapper({ children }) {
  console.log(children);
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          It's Time SaaS Finance Operations Moved Out of Spreadsheets
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          It's hard to hold your hat when you're managing Finance operations in
          a fast growing SaaS. Chargebee makes recognizing, reporting and
          staying compliant a breeze.
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Hobby
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                79
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="blue.500" />
                <Link href="/">Finance</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="blue.500" />
                <Link>venue</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="blue.500" />
                <Link>Sale</Link>
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="blue" variant="outline">
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("blue.300", "blue.700")}
                px={3}
                py={1}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Growth
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  149
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.500" />
                  <Link>E-Commerce</Link>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.500" />
                  <Link>E-Learning</Link>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.500" />
                  <Link>Pblishing</Link>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.500" />
                  <Link>Video & OTT</Link>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.500" />
                  <Link>B2B Saas</Link>
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="blue">
                  Start trial
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Scale
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                349
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="blue.500" />
                <Link>Startup</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="blue.500" />
                <Link>Scaleup</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="blue.500" />
                <Link>Enterprise</Link>
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="blue" variant="outline">
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
