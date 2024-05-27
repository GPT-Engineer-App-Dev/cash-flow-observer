import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const articles = [
  {
    title: "Breaking News: Market Hits Record Highs",
    description: "The stock market reached new heights today as investors reacted positively to the latest economic data.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Giants Release New Gadgets",
    description: "Leading tech companies have unveiled their latest products, promising to revolutionize the industry.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Global Politics: New Trade Agreements",
    description: "Countries around the world are entering new trade agreements to boost economic growth.",
    image: "https://via.placeholder.com/150",
  },
];

const trendingArticles = [
  "Market Analysis: What to Expect Next",
  "Top 10 Tech Innovations of 2023",
  "How Global Politics is Shaping the Economy",
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/business">Business</Link>
          <Link as={RouterLink} to="/tech">Tech</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
        </HStack>
      </Flex>

      <Flex mt={4} direction={{ base: "column", md: "row" }}>
        <Box flex="3">
          {articles.map((article, index) => (
            <Box key={index} mb={4} p={4} borderWidth="1px" borderRadius="lg">
              <Image src={article.image} alt={article.title} mb={4} />
              <Heading size="md" mb={2}>{article.title}</Heading>
              <Text>{article.description}</Text>
            </Box>
          ))}
        </Box>

        <Box flex="1" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading size="md" mb={4}>Trending</Heading>
          <VStack align="start" spacing={2}>
            {trendingArticles.map((title, index) => (
              <Link key={index} href="#" color="blue.500">{title}</Link>
            ))}
          </VStack>
        </Box>
      </Flex>

      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link href="#">Contact</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;