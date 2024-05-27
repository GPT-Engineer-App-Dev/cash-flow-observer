import { Box, Container, Flex, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const articles = [
  {
    title: "Breaking News: Market Hits Record Highs",
    description: "The stock market reached new heights today as investors reacted positively to the latest economic data.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Giants Release New Gadgets",
    description: "Several major tech companies unveiled their latest products at the annual tech conference.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Global Politics: New Trade Agreements",
    description: "Countries around the world are negotiating new trade deals to boost economic growth.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const trendingArticles = [
  "Editor's Pick: The Future of Renewable Energy",
  "Trending: The Rise of Remote Work",
  "Opinion: The Impact of Social Media on Society",
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <Stack direction="row" spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/business">Business</Link>
          <Link as={RouterLink} to="/tech">Tech</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
        </Stack>
      </Flex>

      <Flex mt={4} direction={{ base: "column", md: "row" }} spacing={4}>
        <Box flex="3">
          {articles.map((article, index) => (
            <Box key={index} mb={4} p={4} borderWidth="1px" borderRadius="md">
              <Image src={article.imageUrl} alt={article.title} mb={4} />
              <Heading as="h2" size="md" mb={2}>{article.title}</Heading>
              <Text>{article.description}</Text>
            </Box>
          ))}
        </Box>

        <Box flex="1" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="lg" mb={4}>Trending</Heading>
          <VStack spacing={2} align="start">
            {trendingArticles.map((title, index) => (
              <Text key={index}>{title}</Text>
            ))}
          </VStack>
        </Box>
      </Flex>

      <Flex as="footer" bg="gray.800" color="white" p={4} mt={8} justifyContent="space-between">
        <Text>&copy; 2023 Financial Times</Text>
        <Stack direction="row" spacing={4}>
          <Link as={RouterLink} to="/contact">Contact</Link>
          <Link as={RouterLink} to="/privacy">Privacy Policy</Link>
          <Link as={RouterLink} to="/terms">Terms of Service</Link>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Index;