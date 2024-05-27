import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
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
    description: "Countries around the world are entering new trade agreements to boost their economies.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const trendingArticles = [
  "Editor's Pick: The Future of Renewable Energy",
  "Trending: Cryptocurrency Market Volatility",
  "Top Story: Advances in Artificial Intelligence",
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/world" color="white">
            World
          </Link>
          <Link as={RouterLink} to="/business" color="white">
            Business
          </Link>
          <Link as={RouterLink} to="/tech" color="white">
            Tech
          </Link>
          <Link as={RouterLink} to="/opinion" color="white">
            Opinion
          </Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={4} direction={{ base: "column", md: "row" }} spacing={4}>
        {/* Latest News Section */}
        <VStack flex="3" spacing={4} align="stretch">
          {articles.map((article, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={article.imageUrl} alt={article.title} />
              <Box p={4}>
                <Heading as="h2" size="md" mb={2}>
                  {article.title}
                </Heading>
                <Text>{article.description}</Text>
              </Box>
            </Box>
          ))}
        </VStack>

        {/* Sidebar */}
        <Box flex="1" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="lg" mb={4}>
            Trending Articles
          </Heading>
          <VStack spacing={2} align="stretch">
            {trendingArticles.map((title, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
                <Text>{title}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link as={RouterLink} to="/contact" color="white">
              Contact
            </Link>
            <Link as={RouterLink} to="/privacy" color="white">
              Privacy Policy
            </Link>
            <Link as={RouterLink} to="/terms" color="white">
              Terms of Service
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;